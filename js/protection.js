// Content Protection Script
// Prevents right-click, text selection, image dragging, and DevTools shortcuts

(function() {
    'use strict';

    // Disable right-click context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    }, false);

    // Disable text selection
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    }, false);

    // Disable drag and drop
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    }, false);

    // Disable image dragging
    document.addEventListener('drag', function(e) {
        e.preventDefault();
        return false;
    }, false);

    // Disable keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Disable F12 (DevTools)
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }

        // Disable Ctrl+Shift+I (DevTools)
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            return false;
        }

        // Disable Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && e.key === 'J') {
            e.preventDefault();
            return false;
        }

        // Disable Ctrl+Shift+C (Inspect Element)
        if (e.ctrlKey && e.shiftKey && e.key === 'C') {
            e.preventDefault();
            return false;
        }

        // Disable Ctrl+U (View Source)
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            return false;
        }

        // Disable Ctrl+S (Save Page)
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            return false;
        }

        // Disable Ctrl+A (Select All)
        if (e.ctrlKey && e.key === 'a') {
            e.preventDefault();
            return false;
        }

        // Disable Ctrl+P (Print)
        if (e.ctrlKey && e.key === 'p') {
            e.preventDefault();
            return false;
        }

        // Disable Ctrl+Shift+P (Command Palette in DevTools)
        if (e.ctrlKey && e.shiftKey && e.key === 'P') {
            e.preventDefault();
            return false;
        }

        // Disable Ctrl+Shift+K (Console in Firefox)
        if (e.ctrlKey && e.shiftKey && e.key === 'K') {
            e.preventDefault();
            return false;
        }

        // Disable Ctrl+Shift+Del (Clear browsing data)
        if (e.ctrlKey && e.shiftKey && e.key === 'Delete') {
            e.preventDefault();
            return false;
        }
    }, false);

    // Disable copy (Ctrl+C)
    document.addEventListener('copy', function(e) {
        e.clipboardData.setData('text/plain', '');
        e.preventDefault();
        return false;
    }, false);

    // Disable cut (Ctrl+X)
    document.addEventListener('cut', function(e) {
        e.clipboardData.setData('text/plain', '');
        e.preventDefault();
        return false;
    }, false);

    // Disable paste (Ctrl+V) - optional, can be removed if you want users to paste
    // document.addEventListener('paste', function(e) {
    //     e.preventDefault();
    //     return false;
    // }, false);

    // Prevent image saving via right-click
    const images = document.querySelectorAll('img');
    images.forEach(function(img) {
        img.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
        }, false);
        
        img.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        }, false);
    });

    // Detect DevTools opening (basic detection)
    let devtools = {
        open: false,
        orientation: null
    };

    const threshold = 160;
    setInterval(function() {
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
            if (!devtools.open) {
                devtools.open = true;
                // Optionally redirect or show warning
                // window.location.href = 'about:blank';
                // Or just log (can't fully prevent DevTools)
                console.clear();
                console.log('%c⚠️ Developer Tools Detected', 'color: red; font-size: 20px; font-weight: bold;');
                console.log('%cThis website is protected. Please close Developer Tools.', 'color: red; font-size: 14px;');
            }
        } else {
            devtools.open = false;
        }
    }, 500);

    // Clear console periodically
    setInterval(function() {
        console.clear();
    }, 1000);

    // Disable common DevTools detection bypasses
    Object.defineProperty(window, 'devtools', {
        get: function() {
            return devtools;
        },
        set: function() {}
    });

    // Add CSS to prevent text selection
    const style = document.createElement('style');
    style.textContent = `
        * {
            -webkit-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
            user-select: none !important;
            -webkit-touch-callout: none !important;
            -webkit-tap-highlight-color: transparent !important;
        }
        
        /* Allow text selection in input fields and textareas */
        input, textarea, [contenteditable="true"] {
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
            user-select: text !important;
        }
        
        /* Prevent image dragging */
        img {
            -webkit-user-drag: none !important;
            -khtml-user-drag: none !important;
            -moz-user-drag: none !important;
            -o-user-drag: none !important;
            user-drag: none !important;
        }
        
        /* Keep images clickable but prevent dragging */
        a img, button img, img[onclick], .clickable img {
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);

    // Disable print screen (basic - can't fully prevent)
    document.addEventListener('keyup', function(e) {
        // Disable Print Screen key
        if (e.key === 'PrintScreen') {
            navigator.clipboard.writeText('');
            alert('Screenshots are disabled on this website.');
        }
    }, false);

    console.log('%c⚠️ Protected Content', 'color: #FF6600; font-size: 16px; font-weight: bold;');
    console.log('%cThis website is protected. Unauthorized copying is prohibited.', 'color: #FF6600; font-size: 12px;');

})();

