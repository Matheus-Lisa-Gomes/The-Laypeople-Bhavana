# Build script to bundle The Lay Dharma Household Bhāvanā scripts into js/bundle.js

$lineagesContent = [System.IO.File]::ReadAllText("$PSScriptRoot/js/data/meditationLineagesData.js", [System.Text.Encoding]::UTF8)
$toolsContent = [System.IO.File]::ReadAllText("$PSScriptRoot/js/data/comparativeToolsData.js", [System.Text.Encoding]::UTF8)
$suttaContent = [System.IO.File]::ReadAllText("$PSScriptRoot/js/data/suttaMeditationCorpusData.js", [System.Text.Encoding]::UTF8)
$appContent = [System.IO.File]::ReadAllText("$PSScriptRoot/js/app.js", [System.Text.Encoding]::UTF8)

# Strip ES module imports and exports for universal browser execution
$lineagesClean = $lineagesContent -replace '(?m)^\s*export\s+const\s+', 'const '
$toolsClean = $toolsContent -replace '(?m)^\s*export\s+const\s+', 'const '
$suttaClean = $suttaContent -replace '(?m)^\s*export\s+const\s+', 'const '
$appClean = $appContent -replace '(?m)^\s*import\s+[^;]+;\s*\r?\n', ''

$bundle = @"
/**
 * The Lay Dharma Household Bhāvanā — Standalone Universal Web Bundle
 * Runs directly on file:// as well as HTTPS / local servers.
 */

(function() {
  'use strict';

  // ==========================================
  // 1. MEDITATION LINEAGES DATA
  // ==========================================
$lineagesClean

  // ==========================================
  // 2. COMPARATIVE TOOLS & DIAGNOSTICS DATA
  // ==========================================
$toolsClean

  // ==========================================
  // 3. CANONICAL SUTTA MEDITATION CORPUS
  // ==========================================
$suttaClean

  // ==========================================
  // 4. APPLICATION CONTROLLER
  // ==========================================
$appClean

})();
"@

[System.IO.File]::WriteAllText("$PSScriptRoot/js/bundle.js", $bundle, [System.Text.Encoding]::UTF8)
Write-Host "bundle.js successfully built! Total size: $([System.IO.FileInfo]::new("$PSScriptRoot/js/bundle.js").Length) bytes." -ForegroundColor Green
