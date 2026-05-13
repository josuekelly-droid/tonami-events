# # Script de notification Google - Tonami Events
# # A executer apres chaque deploiement

# $BASE_URL = "https://tonami-events.vercel.app"

# $PAGES = @(
#     "/",
#     "/agence",
#     "/services",
#     "/services/audiovisuel",
#     "/services/design",
#     "/services/numerique",
#     "/services/conseil",
#     "/services/location",
#     "/portfolio",
#     "/blog",
#     "/contact",
#     "/mentions-legales",
#     "/confidentialite"
# )

# Write-Host "Notification Google pour $BASE_URL" -ForegroundColor Cyan
# Write-Host "====================================" -ForegroundColor Cyan

# $compteur = 0
# $total = $PAGES.Count

# foreach ($page in $PAGES) {
#     $compteur++
#     $url = "$BASE_URL$page"
    
#     try {
#         $response = Invoke-WebRequest -Uri "https://www.google.com/ping?sitemap=$url" -Method Get -TimeoutSec 10 -ErrorAction Stop
#         Write-Host "[$compteur/$total] OK : $url" -ForegroundColor Green
#     }
#     catch {
#         Write-Host "[$compteur/$total] Echec : $url" -ForegroundColor Yellow
#     }
    
#     Start-Sleep -Milliseconds 200
# }

# Write-Host "====================================" -ForegroundColor Cyan
# Write-Host "Termine. Verifiez Google Search Console." -ForegroundColor Green