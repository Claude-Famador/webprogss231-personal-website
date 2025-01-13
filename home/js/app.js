new Vue({
    el: '#app',
    data: {
        images: [
            { src: 'images/htmlimg1.jpg', alt: 'Research group with consultant' },
            { src: 'images/htmlimg2.jpg', alt: 'After the Defense' }
            // Add more images here
        ]
    }
});

new Vue({
    el: '#app',
    data: {
        images: [
            { src: 'images/image1.jpg', alt: 'Image 1' },
            { src: 'images/image2.jpg', alt: 'Image 2' },
            { src: 'images/image3.jpg', alt: 'Image 3' }
        ],
        newEntry: {
            name: '',
            message: '',
            timestamp: ''
        },
        entries: [] // Now correctly defined within the Vue instance
    },
    mounted() {
        if (localStorage.getItem('guestbookEntries')) {
            this.entries = JSON.parse(localStorage.getItem('guestbookEntries'));
        }
    },
    methods: {
        addEntry() {
            if (this.newEntry.name && this.newEntry.message) {
                this.newEntry.timestamp = new Date().toLocaleString();
                this.entries.push({ ...this.newEntry });
                localStorage.setItem('guestbookEntries', JSON.stringify(this.entries));
                this.newEntry.name = '';
                this.newEntry.message = '';
            }
        }
    }
});