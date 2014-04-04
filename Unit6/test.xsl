<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> <xsl:template match = "/">
<html>
	<body>
	<xsl:for-each select="courseInformation/course">
		<h1> <xsl:value-of select="courseName"/> </h1> 
		<b> <xsl:value-of select="professor"/> </b>
	</xsl:for-each>
	</body> 
</html>
</xsl:template>
</xsl:stylesheet>