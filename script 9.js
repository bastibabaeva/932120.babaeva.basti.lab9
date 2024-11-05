let equal_button=false;

// Обработчики событий для кнопок ввода цифр
document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll("button[class*='btn_']").forEach(element=>{
        element.addEventListener('click', function(element){
            if(equal_button){
                document.querySelector('input').value="";
                document.querySelector('.grid-input').textContent="";
                equal_button=false;
            }
            if(isNaN(parseFloat(document.querySelector('input').value.slice(-1)))===true&&document.querySelector('input').value.slice(-1)!=='.')
            {
                document.querySelector('.gray-input').textContent="";
            }
            document.querySelector('input').value+=element.target.textContent;
        })
    });


 // Очистка ввода
 document.querySelector('.delete').addEventListener('click', function(){
    document.querySelector('input').value="";
    document.querySelector('.gray-input').textContent="";
 })

 // Удаление одного символа
 document.querySelector('.left').addEventListener('click', function(){
    document.querySelector('input').value=document.querySelector('input').value.slice(0,-1);
    document.querySelector('.gray-input').textContent=document.querySelector('.gray-input').textContent.slice(0,-1);
 })

 document.querySelectorAll('.operation').forEach(element=>{
    element.addEventListener('click', function(element){
        if(equal_button)
        {
            equal_button=false;
        }
        if(document.querySelector('input').value.lenght!==0){
            if(isNaN(parseFloat(document.querySelector('input').value.slice(-1)))===1)
            {
                document.querySelector('input').value=document.querySelector('input').value.slice(0,-1);
                document.querySelector('.gray-input').textContent=document.querySelector('.gray-input').textContent.slice(0,-1);
            }
            document.querySelector('.gray-input').textContent+=element.target.textContent;
            document.querySelector('input').value+=element.target.textContent;
        }
    });
 })

 //Добавление точки
 document.querySelector('.dot').addEventListener('click', function(){
    if(document.querySelector('input').value.slice(-1)!=='.')
    {
        document.querySelector('input').value+='.';
        document.querySelector('.gray-input').textContent+='.';
    }
 })

 // Вычисление результата
 document.querySelector('.equal').addEventListener('click', function(){
    if(isNaN(parseFloat(document.querySelector('input').value.slice(-1)))==0)
    {
        document.querySelector('input').value=eval(document.querySelector('input').value);
        document.querySelector('.gray-input').textContent=document.querySelector('input').value;
        equal_button=true;
    }
 })
})