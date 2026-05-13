# Script de verification d'accessibilite des pages
# Verifie que chaque page est accessible avant soumission Google

$BASE_URL = "https://tonami-events.vercel.app"

$PAGES = @(
    "/",
    "/agence",
    "/services",
    "/services/audiovisuel",
    "/services/design",
    "/services/numerique",
    "/services/conseil",
    "/services/location",
    "/portfolio",
    "/blog",
    "/contact",
    "/mentions-legales",
    "/confidentialite"
)

Write-Host "Verification des pages - Tonami Events" -ForegroundColor Cyan
Write-Host "=======================================" -ForegroundColor Cyan
Write-Host ""

$ok = 0
$echecs = 0
$total = $PAGES.Count

foreach ($page in $PAGES) {
    $url = "$BASE_URL$page"
    
    try {
        $response = Invoke-WebRequest -Uri $url -Method Get -TimeoutSec 10 -ErrorAction Stop
        
        if ($response.StatusCode -eq 200) {
            Write-Host "[$ok/$total] OK (200) : $url" -ForegroundColor Green
            $ok++
        }
        else {
            Write-Host "[$echecs/$total] HTTP $($response.StatusCode) : $url" -ForegroundColor Red
            $echecs++
        }
    }
    catch {
        Write-Host "[$echecs/$total] ERR : $url" -ForegroundColor Red
        $echecs++
    }
    
    Start-Sleep -Milliseconds 200
}

Write-Host ""
Write-Host "=======================================" -ForegroundColor Cyan
Write-Host "Resultat : $ok pages OK, $echecs echecs" -ForegroundColor $(if ($echecs -eq 0) { "Green" } else { "Red" })
Write-Host ""
Write-Host "Prochaine etape :" -ForegroundColor Yellow
Write-Host "1. Allez sur https://search.google.com/search-console" -ForegroundColor White
Write-Host "2. Ajoutez la propriete : $BASE_URL" -ForegroundColor White
Write-Host "3. Soumettez votre sitemap : $BASE_URL/sitemap.xml" -ForegroundColor White