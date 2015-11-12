(function () {
    'use strict';
    var names = [{
            id: "shashank",
            name: 'shashank',
            email: 'shashank@gmail.com',
            phone: 3545656
        },
            {
                id: "chandan",
                name: 'chandan',
                email: 'chandan@gmail.com',
                phone: 358736
            },
                 {
                id: "vishal",
                name: 'vishal',
                email: 'vishal@gmail.com',
                phone: 335458736
            },
                 {
                id: "aditya",
                name: 'aditya',
                email: 'aditya@gmail.com',
                phone: 355686358736
            },
                 {
                id: "shoaib",
                name: 'shoaib',
                email: 'shoaib@gmail.com',
                phone: 352458736
            },
                 {
                id: "sagar",
                name: 'sagar',
                email: 'sagar@gmail.com',
                phone: 2345358736
            },
                 {
                id: "prashant",
                name: 'prashant',
                email: 'prashant@gmail.com',
                phone: 358736
            },
                 {
                id: "dhaval",
                name: 'dhaval',
                email: 'dhaval@gmail.com',
                phone: 358736
            }],
        a,
        i = 0;

    $(document).ready(function () {
        $('.contact').on('click', function () {
            var display;
            a = this.id;
            for (i = 0; i < names.length; i = i + 1) {
                if (a === names[i].id) {
                    display = '<div>Name:' + names[i].name + '</br>' + 'Email:' + names[i].email + '</br>' + 'Phone:' + names[i].phone + '</div>';
                    $(".contact-information").html(display);
                }
            }
        });
    })();
}());

