function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', function() {
      alert('I was clicked!');
    });
}
beforeAll((done)=>{
    done();
},50000);
