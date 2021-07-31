const obj = {
    aaa() {
        setTimeout(function () {
            setTimeout(function () {
                console.log(this);
            })

            setTimeout(() => {
                console.log(this);
            })
        })
        setTimeout(() => {
            setTimeout(function () {
                console.log(this);
            })

            setTimeout(() => {
                console.log(this);
            })
        })
    }
}
obj.aaa()