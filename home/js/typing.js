        // Typing Effect
        const texts = ["pluh"];
        let textIndex = 0;
        let charIndex = 0;

        function typeText() {
            if (charIndex < texts[textIndex].length) {
                document.getElementById('typingEffect').textContent += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 100);
            } else {
                setTimeout(eraseText, 2000);
            }
        }

        function eraseText() {
            if (charIndex > 0) {
                document.getElementById('typingEffect').textContent = texts[textIndex].substring(0, charIndex-1);
                charIndex--;
                setTimeout(eraseText, 50);
            } else {
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(typeText, 500);
            }
        }
        
        typeText();