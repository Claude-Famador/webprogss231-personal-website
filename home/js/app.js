// app.js
new Vue({
    el: '#app',
    data: {
        // Combine all data properties into one instance
        images: [
            { src: 'images/htmlimg1.jpg', alt: 'Research group with consultant' },
            { src: 'images/htmlimg2.jpg', alt: 'After the Defense' }
        ],
        newEntry: {
            name: '',
            message: '',
            timestamp: ''
        },
        entries: [] // Guestbook entries
    },
    mounted() {
        // Load guestbook entries from localStorage
        if (localStorage.getItem('guestbookEntries')) {
            this.entries = JSON.parse(localStorage.getItem('guestbookEntries'));
        }

        // Setup Tetris video hover functionality
        this.$nextTick(() => {
            const tetrisItem = document.getElementById('tetris-item');
            const tetrisVideo = document.getElementById('tetris-video');

            if (tetrisItem && tetrisVideo) {
                tetrisItem.addEventListener('mouseover', function() {
                    tetrisVideo.style.display = 'block';
                    tetrisVideo.play();
                });

                tetrisItem.addEventListener('mouseout', function() {
                    tetrisVideo.style.display = 'none';
                    tetrisVideo.pause();
                    tetrisVideo.currentTime = 0;
                });
            }
        });
    },
    methods: {
        addEntry() {
            if (this.newEntry.name && this.newEntry.message) {
                const entry = {
                    id: Date.now(), // Add unique ID for v-for key
                    name: this.newEntry.name,
                    message: this.newEntry.message,
                    timestamp: new Date().toLocaleString()
                };
                this.entries.push(entry);
                localStorage.setItem('guestbookEntries', JSON.stringify(this.entries));
                
                // Reset form
                this.newEntry.name = '';
                this.newEntry.message = '';
            }
        }
    }
});