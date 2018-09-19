
$(document).ready(function(){
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#intro']").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
function hover_skillsIcon(element){
    var skills_titleText;
    var skills_descText;
    var meter_width;
    var meterMin;
    switch (element.id) {
        case 'icon_c++':
            skills_titleText = "C++";
            skills_descText = "I started C++ during my freshman year at Northeastern University. " +
                "For my projects I was exposed to many difficult problems. Most of these problems were brought on by ambition though. I constructed a program that can play and store songs efficiently.";
            meter_width = 80;
            break;
        case 'icon_java':
            skills_titleText = "Java";
            skills_descText = "I started using Java while in high school. My main involvement with it has been through a higher level language called Processing.";
            meter_width = 50;
            break;
        case 'icon_python':
            skills_titleText = "Python";
            skills_descText = "This language has been one of the more intriguing ones. My first involvement with python was during my Computer Science Principles class senior year of high school. " +
                "I have also recently started using it in a personal project developing an autonomous drone.";
            meter_width = 60;
            break;
        case 'icon_vba':
            skills_titleText = "VBA";
            skills_descText = "During my summer going into sophomore year I learned VBA for an internship. My internship was a Department of the Navy Pathways internship (DON Pathways) in Groton, CT. " +
                "I used VBA as part of my job to develop more efficient excel files and access databases. The project I worked on the most was an Individual Development Plan Database in Access. " +
                "This required extensive use of both SQL and VBA to make an efficient interface for employees to input training data. It had both an offline mode and online mode to decrease loading times. The offline " +
                "mode was created because the network was very slow and Access does not work well on the network. I created local tables and secured them with VBA." +
                " Currently, the IDP Database is still being used for employee management.";
            meter_width = 55;
            break;
        case 'icon_sql':
            skills_titleText = "SQL";
            skills_descText = "My experience with SQL was through a database that I constructed in Access for a Department of the Navy Pathways internship.";
            meter_width = 40;
            break;
        case 'icon_matlab':
            skills_titleText = "Matlab";
            skills_descText = "I know basic Matlab functions and have explored creating complex models within it. Matlab is mostly used for occasional simulations and classes.";
            //skills_descText = "I learned Matlab during my freshmen year at Northeastern University. Recently, I have started working with it more for a research project with Professor Jose Martinez at Northeastern University. " +
                //"I am developing a simulation for the dispersion of a swarm of drones.";
            meter_width = 40;
            break;
        default:
            skills_titleText = "404";
            skills_descText = "Error finding ID";
            meter_width = 0;
    }
    document.getElementById("skills_desc").querySelector('h1').innerText = skills_titleText;
    document.getElementById("skills_desc").querySelector('p').innerText = skills_descText;
    meterMin = Number(document.getElementById("skills_meterVal").style.width.replace(/[^\d\.\-]/g, ''));
    meterGrow(meterMin, meter_width);
    //document.getElementById("skills_meterVal").style.width = meter_width.toString() + "%";
};
function meterGrow (meterNow, meterNew){
    var i = 0;

    if (meterNew > meterNow)
    {
        i = meterNow;
        var id = setInterval(growBar,10);
        function growBar() {
            if (i < meterNew)
            {
                i++;
                document.getElementById("skills_meterVal").style.width = i.toString() + "%";
            }
            else
            {
                clearInterval(id);
            }

        }
    }
    else if (meterNow > meterNew)
    {
        i = meterNow;
        var id = setInterval(shrinkBar,10);
        function shrinkBar()
        {
            if (i > meterNew)
            {
                i--;
                document.getElementById("skills_meterVal").style.width = i.toString() + "%";
            }
            else
            {
                clearInterval(id);
            }
        }
    }

};
function hover(element){
    var file;
    switch (element.id) {
        case "PhysSim":
            file = "img/Portfolio/ex_PhysSim.PNG";
            break;
        case "MazeGame":
            file = "img/Portfolio/ex_MazeGame.PNG";
            break;
        default:
            file= "img/snowymountain2.jpg";
    }
    document.getElementById("portTempImg").setAttribute('src',file);
};
function unhover(element) {
    document.getElementById("portTempImg").setAttribute('src','img/snowymountain2.jpg');
};