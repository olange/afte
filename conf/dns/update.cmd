:: afterall.ch
:: Fetch all the DNS records from the SOA
::
:: $Id$

@echo off

dig @ns-34-a.gandi.net afterall.ch any
dig @ns-34-a.gandi.net afterall.ch any > afterall.ch.dns.txt

pause
:: eof