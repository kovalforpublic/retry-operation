async function main() {
    function fn() {
    	return new Promise((resolve, reject) => {
    		const n = Math.floor(Math.random() * 11);
    		n > 3 ? reject(new Error('error')) : resolve(n)
    	});
    }

    function executeFn(fn, maxAttempts) {
        return new Promise(async (resolve, reject) => {
            while (maxAttempts) {
                try {
                    const data = await fn();
                    resolve(data);
                    break;
                } catch (err) {
                    maxAttempts--;
                    
                    if (maxAttempts === 0) {
                        reject(err);
                        break;
                    }
                }
            }
        })
    }
    try {
        const result = await executeFn(fn, 3);
        console.log('const result: ', result);
    } catch (err) {
        console.log('error: ', err);
    }
}
main();
