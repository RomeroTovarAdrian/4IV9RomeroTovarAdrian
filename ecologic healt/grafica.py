import pandas as pd
import webbrowser





datos = pd.read_csv("datos.csv")
df = pd.DataFrame(datos)
script = ""
i=0
while i<7:
        script = script+"{x:'"+str(datos['ano'].loc[i])+"', y:"+str(datos['consumo'].loc[i])+"},\n"
        i+=1
print (script)






f = open('grafica.html','w')

mensaje = """<html>
    <head>
        <title>GRAFICA</title>
        <meta charset='utf-8'>
        <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'>
        <link rel='stylesheet' type='text/css' href='morris.css'>	
        <script src='http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js'></script>
        <script src='http://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js'></script>
        <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossorigin='anonymous'></script>	
        <script src='Morris.js'></script>
        <script>    
      


function grafica(){
  new Morris.Area({
  element: 'graph',
  data: [

"""+script+"""

      ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['consumo']
}).on('click', function(i, row){
  console.log(i, row);
});

    document.getElementById('div').style.display='';
    document.getElementById('boton').style.display='none';
}

    
    
    
  </script>
  </head>
    <body>
      <h1>Grafica</h1>
      <br>
      <h3 texto1></h3>



      <hr>
      <br>
      <br>
      <br>


      <p><h2>CONSUMO EN TONELADAS DEL PAPEL</h2></p>
      <div id='graph'>
        <div id="div" style="display:none">
        <br>
        <br>
        </div>
      </div>
      <div id='botones'>
        <input type='button' style="display:'';" id='boton' value='Ver'  class="rainbow-button"  onclick='grafica()'>
      </div>


      </div>
    </body>
</html>"""
f.write(mensaje)
f.close()

webbrowser.open_new_tab('grafica.html')