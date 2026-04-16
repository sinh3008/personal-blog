$htmlFiles = Get-ChildItem -Path '.' -Filter '*.html' -Recurse
foreach ($file in $htmlFiles) {
    if ($file.FullName -match 'components') { continue }
    
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    # 1. Replace nav
    $content = [regex]::Replace($content, '(?s)<nav class="navbar">.*?</nav>', '<div id="header-placeholder"></div>')
    
    # 2. Replace footer
    $content = [regex]::Replace($content, '(?s)<footer>.*?</footer>', '<div id="footer-placeholder"></div>')
    
    # Prefix
    $prefix = ""
    if ($file.FullName -match '\\pages\\') {
        $prefix = "../"
    }

    # 3. Replace CSS
    $content = [regex]::Replace($content, '<link rel="stylesheet" href=".*?css/style\.css">', "<link rel=`"stylesheet`" href=`"${prefix}styles/main.css`">")
    
    # 4. Replace Scripts
    $scriptBlock = "<script src=`"${prefix}data/translations/vi.js`"></script>`n    <script src=`"${prefix}data/translations/en.js`"></script>`n    <script src=`"${prefix}scripts/utils.js`"></script>`n    <script src=`"${prefix}scripts/i18n.js`"></script>`n    <script src=`"${prefix}scripts/components.js`"></script>`n    <script src=`"${prefix}scripts/main.js`"></script>`n    <script src=`"${prefix}scripts/page-init.js`"></script>"
    $content = [regex]::Replace($content, '(?s)<script src=".*?js/translations\.js"></script>\s*<script src=".*?js/main\.js"></script>', $scriptBlock)

    # 5. Body path links fix
    if ($prefix -eq "../") {
        $content = [regex]::Replace($content, 'src="\./assets/', 'src="../assets/')
        $content = [regex]::Replace($content, 'href="index\.html"', 'href="../index.html"')
    } else {
        $content = [regex]::Replace($content, 'href="([a-zA-Z0-9-]+\.html)"', { 
            param($m) 
            if ($m.Groups[1].Value -eq 'index.html') { return $m.Value }
            return "href=`"pages/" + $m.Groups[1].Value + "`"" 
        })
    }
    
    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
}
