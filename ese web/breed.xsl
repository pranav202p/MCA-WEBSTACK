<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >
<xsl:template match="/">
  <html>
  <body>
  <h2>Employee information</h2>
    <table border="1">
      <tr bgcolor="#9acd32">
        <th>Breed</th>
        <th>Color</th>
        <th>Country</th>
        
      </tr>
      <xsl:for-each select="breeds/Breed">
      <tr>
        <td><xsl:value-of select="breed"/></td>
        <td><xsl:value-of select="Color"/></td>
        <td><xsl:value-of select="Country"/></td>
      </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>