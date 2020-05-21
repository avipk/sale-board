/* eslint-disable no-tabs */
module.exports = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xsl:stylesheet version="1.0"  xmlns="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/"><!--
        -->Id,בניין,קומה,מס דירה,טיפוס דירה,מס חדרים,כיוון אויר,שטח דירה,שטח מרפסת,מחיר,סטטוס,סטטוס מכירה<!--    -->
        <xsl:for-each select="list/properties/property"><!--
        --><xsl:sort select="@BuildingTitle" data-type="number"/><!--
        --><xsl:sort select="@Floor" data-type="number"/><!--
        --><xsl:sort select="@ProperyTitle" data-type="number"/><!--
        --><xsl:call-template name="propery-display"/><!--
        --></xsl:for-each>
	</xsl:template>	
    <xsl:template name="propery-display">
        <xsl:value-of select="@PropertyID"/>,<!--
		--><xsl:value-of select="@BuildingTitle"/>,<!--
		--><xsl:value-of select="@Floor"/>,<!--
		--><xsl:value-of select="@PropertyTitle"/>,<!--
		-->"<xsl:value-of select="@ModelTitle"/>",<!--
		--><xsl:value-of select="@Rooms"/>,<!--
		-->"<xsl:value-of select="@Exposure"/>",<!--
		--><xsl:value-of select="@Size"/>,<!--
		--><xsl:value-of select="@Balcony"/>,<!--
		--><xsl:value-of select="@PriceIncVAT"/>,<!--
		--><xsl:value-of select="@PStatus"/>,<!--
		-->"<xsl:call-template name="propery-status-translate"/>"
	</xsl:template>
	
	<xsl:template name="propery-status-translate">
		<xsl:choose>
			<xsl:when test="@PStatus=7">נמכר</xsl:when>
			<xsl:when test="@PStatus=4">לא במחיר למשתכן</xsl:when>			
		</xsl:choose>
	</xsl:template>
</xsl:stylesheet>`;
