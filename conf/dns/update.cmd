:: afterall.ch
:: Fetch all the DNS records from the SOA
::
:: $Id$

@echo off

dig @ns.ch-inter.net afterall.ch any
dig @ns.ch-inter.net afterall.ch any > afterall.ch.dns.txt

pause
:: eof