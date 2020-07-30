const Ray = function () {
    return {
        length: 0,
        push: function (value) {
            this[this.length] = value
            this.length++
        },
        pop: function () {
            let lastIndex = this.length - 1
            let toBeRemoved = this[lastIndex]
            this.length--
            delete this[lastIndex]
            return toBeRemoved
        },
        includes: function (value) {
            for (let i = 0; i < this.length; i++) {
                if (this[i] === value) {
                    return true
                }
            }
            return false
        },

        indexOf: function (value) {
            for (let i = 0; i < this.length; i++) {
                if (this[i] === value) {
                    return i
                }
            }
            return -1
        },

        shift: function () {
            const remove = this[0];
            for (let i = 0; i < this.length - 1; i++) {
                i;
                this[i] = this[i + 1]
            }
            delete this[this.length - 1]
            this.length--
            return remove
        },

        unshift: function (value) {
            for (let i = this.length; i >= 1; i--) {
                i;
                this[i] = this[i - 1]
            }
            this[0] = value
            return this.length++
        }

    }
    return Ray
}

module.exports = Ray
