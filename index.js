let canva1 = document.getElementById('canva1');
        let context = el =>  el.getContext('2d');
        context1 = context(canva1);
        let canva2 = document.getElementById('canva2');
        context2 = context(canva2);

        context1.fillStyle = 'pink'
        context1.fillRect(80, 80, 400, 400); 
        // fillRect leva 4 parametros: X, Y, WIDTH and HEIGHT

        context1.lineWidth = 1;
        context1.beginPath();
        context1.rect(190, 150, 400, 400);
        context1.stroke();


        context1.beginPath();
        context1.arc(190, 150, 100, 0, Math.PI * 2); // Parametros: X, Y, Radius, Angulo inicial, Algulo final (em radianos)
        context1.stroke();

        let module = 50;
        for(let i = 0; i < 6; i++){ 
            context2.beginPath();
            context2.rect(module, 100, 50, 50);    
            let firstNum = module.toString().split("");
            if(firstNum[0] % 2 == 0){
                context2.fillStyle = 'pink'
                context2.fillRect(module, 100, 50, 50); 
            } else if( i != 0 & firstNum[0] % 2 != 0 ){
                context2.stroke();
                 
            }
            module += 100;
        }
        