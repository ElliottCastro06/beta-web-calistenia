function comprar(plan, precio) {
    alert('Has comprado el plan ' + plan + ' por ' + precio + ' colones.');
    // Aquí puedes agregar la lógica para redirigir a la página de agradecimiento correspondiente
    window.location.href = 'thanks-' + plan.replace(' ', '-').toLowerCase() + '.html';
}
