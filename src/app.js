
window.onload = () => generateExcuse();

        const generateExcuse = () => {
            let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
            let action = ['ate', 'peed on', 'crushed', 'broke'];
            let what = ['my homework', 'my phone', 'the car'];
            let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

            const randomElement = arr => arr[Math.floor(Math.random() * arr.length)];
            let excuse = `${randomElement(who)} ${randomElement(action)} ${randomElement(what)} ${randomElement(when)}.`;
            
            document.getElementById('excuse').innerHTML = excuse;
        };
