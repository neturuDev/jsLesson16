function f(start, end, delay) {
    function print(delay, data) {
        setTimeout(function(data) {
            console.log(data);
        }, delay, data);
    }
    if (start <= end) {
        let counter = 0;
                for (let i = start; i <= end; i++) {
                    print(counter, i);
                    counter += delay;
                }; 
    } else {
        let counter2 = 0;
        for (let i = start; i >= end; i--) {
            print(counter2, i);
            counter2 += delay;
        };
    }
}