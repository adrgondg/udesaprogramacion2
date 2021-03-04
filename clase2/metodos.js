

const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo cacion id ${id}`),
    pausar: () => console.log('pausar'),
    borrar: id => console.log('borrar'),
    crearPlaylist: nombre => console.log('creando playlist'),
    reproducirPlaylist: nombre => console.log('Reproduciendo playlist'),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`)
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }

}

//console.log(reproductor.cancion);
console.log(reproductor.reproducir(9));

//reproductor.nuevaCancion('Enter Sandman');
reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;
