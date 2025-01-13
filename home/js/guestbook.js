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
        entries: [] // Array to store guestbook entries
    },
    methods: {
        addEntry() {
            // Add a new entry to the guestbook
            if (this.newEntry.name && this.newEntry.message) {
                this.newEntry.timestamp = new Date().toLocaleString();
                this.entries.push({ ...this.newEntry });
                // Reset the form fields
                this.newEntry.name = '';
                this.newEntry.message = '';
            }
        }
    }
});