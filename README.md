# ip-address
Oneliners to get your current IP address.

## PowerShell
```powershell
$wr = Invoke-WebRequest -UseBasicParsing -URI "https://www.mislav-bozicevic.iz.hr/"; $wr.Headers["X-Client-Ip-Address"]
```

## Bash
```bash
wget -O /dev/null -S https://www.mislav-bozicevic.iz.hr/ 2>&1|grep "X-Client-Ip-Address"|awk {'print $2'}
```
