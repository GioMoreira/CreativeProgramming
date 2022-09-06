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


        const width = 50;
        const height = 50;
        const gap = 30;
        let x,y;

        for(let i = 0; i < 6; i++){ 
            for(let j = 0; j < 5; j++){
                x = 100 + (width + gap) * i;
                y = 100 + (height + gap) * j;
                
                
                context2.beginPath();
                context2.rect(x, y, width, height);    
                if((i % 2 == 0 & j%2==0) | (i % 2 != 0 & j%2!=0)){
                    context2.fillStyle = 'pink'
                    context2.fillRect(x, y, width, height); 

                    context2.beginPath();
                    context2.rect(x + 8, y + 8, width - 16, height - 16 );
                    if(Math.random() < 0.5){
                        context2.beginPath();
                        context2.rect(x + 8, y + 8, width - 16, height - 16 );
                        context2.stroke();
                    }
                    
                } 
                else{
                    context2.stroke();      
                    if(Math.random() > 0.5){
                        context2.beginPath();
                        context2.rect(x + 8, y + 8, width - 16, height - 16 );
                        context2.stroke();
                    
                    }              
                }

            }

            
            
        }
