

        // JavaScript för att fälla ut listan
        document.getElementById('toggleButton').addEventListener('click', function() {
            var list = document.getElementById('myList');
            if (list.classList.contains('hidden')) {
                list.classList.remove('hidden');
                this.textContent = 'Dölj lista'; // Ändrar knappens text
            } else {
                list.classList.add('hidden');
                this.textContent = 'Visa lista'; // Återställer knappens text
            }
        });