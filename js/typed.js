class TypedText {

    constructor(element, words, options) {

        this.element = document.querySelector(element);

        this.words = words;

        this.speed = options.speed || 80;

        this.backSpeed = options.backSpeed || 40;

        this.delay = options.delay || 1500;

        this.loop =
            options.loop !== undefined ?
            options.loop :
            true;

        this.wordIndex = 0;

        this.charIndex = 0;

        this.isDeleting = false;

        this.type();
    }

    type() {

        const currentWord =
            this.words[this.wordIndex];

        if (this.isDeleting) {

            this.charIndex--;

        } else {

            this.charIndex++;
        }

        this.element.textContent =
            currentWord.substring(0, this.charIndex);

        let speed =
            this.isDeleting ?
            this.backSpeed :
            this.speed;

        if (!this.isDeleting &&
            this.charIndex === currentWord.length
        ) {

            speed = this.delay;

            this.isDeleting = true;

        } else if (
            this.isDeleting &&
            this.charIndex === 0
        ) {

            this.isDeleting = false;

            this.wordIndex++;

            if (this.wordIndex >= this.words.length) {

                this.wordIndex = 0;
            }
        }

        setTimeout(() => {

            this.type();

        }, speed);
    }
}