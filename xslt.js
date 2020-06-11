/* eslint-disable no-tabs */
module.exports = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xsl:stylesheet version="1.0"  xmlns="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<style>
					html {
						direction: rtl;
						font-family: arial;
						font-size: 18px;
					}
					table {
						border: 1px solid #000;
					}
					th, td {
						padding: 0 6px;
					}
					.market {
						background-color: #1d1d1d;
						color: #6d6d6d;
					}
					.sold {
						background-color: red;
						color: #fff;
					}
					.precontract {
						background-color: navy;
						color: #fff;
					}
					.mishtaken {
						color: #000;
					}
				</style>
			</head>
			<body>
				
				<table border="1" cellspacing="0">
          <tr>
            <th>Id</th>
						<th>בניין</th>
						<th>קומה</th>
						<th>מס דירה</th>
						<th>טיפוס דירה</th>
						<th>מס חדרים</th>
						<th>כיוון אויר</th>
						<th>שטח דירה</th>
						<th>שטח מרפסת</th>
						<th>מחיר</th>
						<th>שם קונה</th>
						<th>סטטוס</th>						
						<th>סטטוס מכירה</th>
						<th>תאריך בחירת דירה</th>
						<th>תאריך חתימת חוזה</th>
					</tr>		
					<xsl:for-each select="list/properties/property">
						<xsl:sort select="@BuildingTitle" data-type="number"/>
						<xsl:sort select="@Floor" data-type="number"/>
						<xsl:sort select="@ProperyTitle" data-type="number"/>
						<xsl:call-template name="propery-display"/>
					</xsl:for-each>						
				</table>
				<a href="/?type=xls" download="sale-board.csv">Download</a>				
			</body>
		</html>
	</xsl:template>
	
	<xsl:template name="propery-display">
		<tr>
			<xsl:attribute name="class">
				<xsl:call-template name="propery-status-class"/>
			</xsl:attribute>
			<td><xsl:value-of select="@PropertyID"/></td>
			<td><xsl:value-of select="@BuildingTitle"/></td>
			<td><xsl:value-of select="@Floor"/></td>
			<td><xsl:value-of select="@PropertyTitle"/></td>
			<td><xsl:value-of select="@ModelTitle"/></td>
			<td><xsl:value-of select="@Rooms"/></td>
			<td><xsl:value-of select="@Exposure"/></td>
			<td><xsl:value-of select="@Size"/></td>
			<td><xsl:value-of select="@Balcony"/></td>
			<td><xsl:value-of select="@PriceIncVAT"/></td>
			<td><xsl:value-of select="@BuyerName"/></td>
			<td><xsl:value-of select="@PStatus"/></td>
			<td><xsl:call-template name="propery-status-translate"/></td>
			<td><xsl:value-of select="@AgreementDate"/></td>
			<td><xsl:value-of select="@ContractDate"/></td>
		</tr>	
	</xsl:template>
	
	<xsl:template name="propery-status-class">
	<xsl:choose>
			<xsl:when test="@PStatus=4">market</xsl:when>			
			<xsl:when test="@PStatus=7">sold</xsl:when>
			<xsl:when test="@PStatus=8">precontract</xsl:when>
			<xsl:when test="@PStatus=9">mishtaken</xsl:when>
		</xsl:choose>
	</xsl:template>
	
	<xsl:template name="propery-status-translate">
		<xsl:choose>
			<xsl:when test="@PStatus=4">פנוי - שוק חופשי</xsl:when>			
			<xsl:when test="@PStatus=7">נמכר</xsl:when>
			<xsl:when test="@PStatus=8">לפני חוזה</xsl:when>
			<xsl:when test="@PStatus=9">פנוי - מחיר למשתכן</xsl:when>
		</xsl:choose>
	</xsl:template>
</xsl:stylesheet>`;
