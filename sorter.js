var students = ["Amaree", "Alan", "Edgar", "When a Manuel loves a woman", "Billy", "Marlene Gallardo", "Marlene Hernandez", "Allyson Dixon-Duart-heeeeey", "Emily Garcia", "Lupito", "Cardo", "Geo", "Kevin", "Gilberto", "Clemente", "Arianna", "Jerry Fonseca-Garcia", "Flower", "GERRRSSSSOOOOOON", "Jose Carbajal-Lopez", "Christian Vences-Cabrera", "Estefani", "Abel", "Eric Tobon", "Jose", "Owens", "Daddy Anthony", "Jenny"]

function sortStudents(studentsArray, size){
    var groups = [ ]
    var currentGroup = [ ]
            
            //create a loop that picks random students
           // from the list of students
           
           while (studentsArray.length > 0){
               //pick a random number between 0 and the length of the student list. Use that number to pick a random student.
               var randomNumber = Math.floor(Math.random() * studentsArray.length)
               var randomStudents = studentsArray[randomNumber]
               //Add a random student to the current group
               currentGroup.push(randomStudents)
               //Delete the random student from the student list
               studentsArray.splice(randomNumber, 1)
               
               if(currentGroup.length >= size){
                   groups.push(currentGroup)
                   currentGroup = [ ]
               }
            }
            if (currentGroup.length > 0){
                groups.push(currentGroup)
            }
            for (var i = 0; i < groups.length; i++){
                console.log('Group #' + (i+1) + ': '+ groups[i])
            }
}
console.log(students.sort().indexOf('Daddy Anthony'))