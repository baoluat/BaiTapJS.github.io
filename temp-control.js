
function create_temp_control(div_name, room_name){
    
    const temp_liv = document.createElement('div');
    temp_liv.className = 'temp-liv';

    const liv = document.createElement('ul');
    liv.className = 'liv';
    temp_liv.appendChild(liv);

    const living_room = document.createElement('li');
    living_room.className = 'living-room';
    liv.appendChild(living_room);

    const icon = document.createElement('img');
    icon.style = 'width: 48px;height: 48px;';
    icon.src = './icon/temperature-icon.png';
    icon.alt = '';
    living_room.appendChild(icon);

    const h5 = document.createElement('h5');
    h5.innerHTML = room_name;
    living_room.appendChild(h5);

    const sw = document.createElement('div');
    sw.className = 'switch';
    sw.innerHTML = `<input type="checkbox" class="switch-toggle">`;
    living_room.appendChild(sw);

    // const cb = document.createElement('input');
    // cb.type = 'checkbox';
    // cb.className = 'switch-toggle';
    // cb.setAttribute('onclick', 'active()');
    // sw.appendChild(cb); 

    const line = document.createElement('hr');
    line.className = 'line';
    temp_liv.appendChild(line);

    const o_a = document.createElement('div');
    o_a.className = 'only-active';
    temp_liv.appendChild(o_a);

    const data = document.createElement('div');
    data.className = 'data';
    o_a.appendChild(data);

    const temperature_l = document.createElement('ul');
    temperature_l.className = 'temperature-l';
    data.appendChild(temperature_l);

    const temp = document.createElement('li');
    temp.className = 'temp';
    temperature_l.appendChild(temp);

    const td = document.createElement('p');
    td.className = 'td';
    td.innerHTML = 'Temperature';
    temp.appendChild(td);


    const cir = document.createElement('div');
    cir.className = 'circle';
    cir.innerHTML = `<div class="ctn">
                        <div class="n"></div>
                    </div>
                     <svg width="180px" height="180px">
                        <circle cx="90" cy="90px" r="80" class="under"/>
                        <circle cx="90" cy="90px" r="80" class="above"/>
                    </svg>`;
    temperature_l.appendChild(cir);

    // const ct = document.createElement('div');
    // ct.className = 'ctn';
    // cir.appendChild(ct);

    // const n = document.createElement('div');
    // n.className = 'n';
    // ct.appendChild(n);


    // const c_svg = document.createElement('svg');
    // c_svg.setAttribute('width', '180px');
    // c_svg.setAttribute('height', '180px');
    // c_svg.style.strokeWidth = '15px';
    // c_svg.style.fill = '#0631470d';
    // c_svg.style.transform = 'rotate(180deg)';
    // cir.appendChild(c_svg);

    // const ci1 = document.createElement('circle');
    // ci1.setAttribute('cx', '90px');
    // ci1.setAttribute('cy', '90px');
    // ci1.setAttribute('r', '80px');
    // ci1.style.strokeWidth = '15px';
    // ci1.style.fill = '#0631470d';
    // ci1.style.stroke = '#161e25';
    // ci1.className = 'under';
    // c_svg.appendChild(ci1);

    // const ci2 = document.createElement('circle');
    // ci2.setAttribute('cx', '90px');
    // ci2.setAttribute('cy', '90px');
    // ci2.setAttribute('r', '80px');
    // ci2.style.strokeWidth = '15px';
    // ci2.style.fill = '#0631470d';
    // ci2.style.stroke = '#0f9ce673';
    // ci2.style.strokeDasharray = '502';
    // ci2.style.strokeDashoffset = '502';
    // ci2.className = 'above';
    // c_svg.appendChild(ci2);
    
    const temp_C_F = document.createElement('li');
    temp_C_F.className = 'temp-C-F';
    temperature_l.appendChild(temp_C_F);

    const temp_C = document.createElement('p');
    temp_C.className = 'temp-C';
    temp_C_F.appendChild(temp_C);

    const sp1 = document.createElement('span');
    sp1.className = 'room-temp-C';
    sp1.innerHTML = '16';
    temp_C.appendChild(sp1);

    const su1 = document.createElement('sup');
    su1.className = 'dvc';
    su1.innerHTML = '°C';
    temp_C.appendChild(su1);

    const temp_F = document.createElement('p');
    temp_F.className = 'temp-F';
    temp_C_F.appendChild(temp_F);

    const sp2 = document.createElement('span');
    sp2.className = 'room-temp-F';
    sp2.innerHTML = '60.80';
    temp_F.appendChild(sp2);

    const su2 = document.createElement('sup');
    su2.className = 'dvf';
    su2.innerHTML = '°F';
    temp_F.appendChild(su2);
    
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style = 'position: relative';
    data.appendChild(bar);

    const ra = document.createElement('div');
    ra.className = 'range';
    bar.appendChild(ra);

    const range_f = document.createElement('div');
    range_f.className = 'range-fill';
    ra.appendChild(range_f);

    const range_h = document.createElement('div');
    range_h.className = 'range-handle';
    ra.appendChild(range_h);


    const temp_control = document.querySelector(div_name);
    temp_control.appendChild(temp_liv);


    
    // EVENT

    const obj = document.querySelector(div_name + ' .switch-toggle');
    obj.onclick = active;
    function active(){
        
        var c = document.querySelector(div_name + ' .only-active');
        if (obj.checked == true)
            {
                c.style.display="block";
                console.log("AC of "+room_name+": ON");  
                
            }
        else
            {  c.style.display="none";
                console.log("AC of "+room_name+": OFF");
            };

        };

    const range = document.querySelector(div_name + ' .range');
    const range_handle = document.querySelector(div_name + ' .range-handle');
    const range_fill = document.querySelector(div_name + ' .range-fill');
    const doC = document.querySelector(div_name + ' .room-temp-C');
    const doF = document.querySelector(div_name + ' .room-temp-F');
    
    range_handle.addEventListener("mousedown", () => {
        window.addEventListener("mousemove", update1);
    });
    
    
    window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", update1);
        range_handle.removeEventListener("mousedown",update1);
    
    });
    
    function update1(e){
    
        var dc,df;
        var bt = range.getBoundingClientRect().top + 200 - e.clientY - 15
        if (bt <0)
            {
                range_handle.style.setProperty("bottom", "0px"); 
                dc = 16;
                df = 60.80;
            }
        else if (bt > 170)
            {
                range_handle.style.setProperty("bottom", "170px");
                dc = 32;
                df = 89.60;
            }
        else
            {
                range_handle.style.setProperty("bottom", `${bt}px`);
                range_fill.style.setProperty("height", `${15 + bt}px`);
                ctn.style.setProperty("transform",`rotate(${bt*360/170}deg)`);
                document.querySelector(div_name +' .above').style.setProperty("stroke-dashoffset",`${502 - bt*360/170*(502/360)}`);
                dc = 16 + (range.getBoundingClientRect().top + 200 - e.clientY - 15)*(16/170);
                df = dc*1.8 + 32;
            }
            var tc = dc.toFixed(2);
            var tf = df.toFixed(2);
            doC.innerHTML = tc;
            doF.innerHTML = tf;
            console.log("Temperature of "+room_name+": " + doC.innerHTML +"°C = " + doF.innerHTML + "°F" );
        if (dc > 27)
            {
               doC.style.setProperty("color","red");
               document.querySelector(div_name +' .dvc').style.setProperty("color","red");
               doF.style.setProperty("color","red");
               document.querySelector(div_name +' .dvf').style.setProperty("color","red");
           }
        else 
           {
            doC.style.setProperty("color","#aee0fa");
            document.querySelector(div_name +' .dvc').style.setProperty("color","#aee0fa");
            doF.style.setProperty("color","#0f9ce6");
            document.querySelector(div_name +' .dvf').style.setProperty("color","#0f9ce6");
           }
        }
    
    
    const ctn = document.querySelector(div_name + ' .ctn');
    const circle = document.querySelector(div_name + ' .n');
    
    circle.addEventListener("mousedown", () => {
            window.addEventListener("mousemove", update2);
        });
    
    window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", update2);
        circle.removeEventListener("mousedown",update2);
    });
    
    function update2(e){
        var doi = ctn.getBoundingClientRect().top  - e.clientY;
        var ke = ctn.getBoundingClientRect().left  - e.clientX;
        var tan, goc;
    
        if ((ke > 0) && (doi > 0))
            {
                tan = doi/ke;
                goc = Math.atan(tan) *57.296;
             
            }
        else if (ke < 0)
           {
            {
                tan = (-ke)/doi;
                goc = 90 + Math.atan(tan) * 57.296;
            }
            if ( (doi <0))
            {  
                tan = doi/ke;   
                goc = 180 + Math.atan(tan) * 57.296;
             }
           } 
        
        else if (doi <0)
             {
                tan = ke/(-doi);
                goc =  270 + Math.atan(tan) * 57.296;
        
             }
             ctn.style.setProperty("transform",`rotate(${goc}deg)`);
             document.querySelector(div_name +' .above').style.setProperty("stroke-dashoffset",`${502 - goc*(502/360)}`);
             range_handle.style.setProperty("bottom", `${goc*(170/360)}px`);
             range_fill.style.setProperty("height", `${15 + goc*(170/360)}px`);
    
        // ctn.style.setProperty("transform",`rotate(${goc}deg)`);
        // document.getElementById('above').style.setProperty("stroke-dashoffset",`${502 - goc*(502/360)}`);
        // range_handle.style.setProperty("bottom", `${goc*(170/360)}px`);
        // range_fill.style.setProperty("height", `${15 + goc*(170/360)}px`);
        var dc = 16 + goc*16/360;
        var df = dc*1.8 + 32;
        var tc = dc.toFixed(2);
        var tf = df.toFixed(2);
        doC.innerHTML = tc;
        doF.innerHTML = tf;
        if (dc > 27)
            {
               doC.style.setProperty("color","red");
               document.querySelector(div_name +' .dvc').style.setProperty("color","red");
               doF.style.setProperty("color","red");
               document.querySelector(div_name +' .dvf').style.setProperty("color","red");
           }
        else 
           {
            doC.style.setProperty("color","#aee0fa");
            document.querySelector(div_name +' .dvc').style.setProperty("color","#aee0fa");
            doF.style.setProperty("color","#0f9ce6");
            document.querySelector(div_name +' .dvf').style.setProperty("color","#0f9ce6");
           }
        console.log("Temperature of "+room_name+": "+ doC.innerHTML +"°C = " + doF.innerHTML + "°F" );
    }
};

