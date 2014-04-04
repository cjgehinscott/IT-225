<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> <xsl:template match = "/">
<html>
	<body>
	<xsl:for-each select="menu/foodItem[availability='In-Stock']">
		<h1 style="color:#9acd32"> <xsl:value-of select="name"/> </h1> 
		<ul>
			<li>Price: $<xsl:value-of select="price"/> </li>
			<li>Calories: <xsl:value-of select="calories"/> </li>
			<li>Dietary Restriction: <xsl:value-of select="dietaryRestriction"/> </li>
			<li>Availability: <xsl:value-of select="availability"/> </li>
		</ul>
	</xsl:for-each>
	</body> 
</html>
</xsl:template>
</xsl:stylesheet>

