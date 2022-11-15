setInterval(() => {

    time = new Date()
    hrh = time.getHours();
    mnh = time.getMinutes();
    sech = time.getSeconds();
    day = time.getDay();
    month = time.getMonth();
    daydate = time.getDate();

    hdeg = hrh * (30) + (mnh / 2);
    mdeg = mnh * (6) + (sech / 10);
    sdeg = sech * (6);

    hour.style.transform = `rotate(${hdeg}deg)`;
    minute.style.transform = `rotate(${mdeg}deg)`;
    second.style.transform = `rotate(${sdeg}deg)`;

    var hrr = document.getElementById('hblock');
    var mnn = document.getElementById('mblock');
    var see = document.getElementById('sblock');

    hrr.innerHTML = hrh;
    mnn.innerHTML = mnh;
    see.innerHTML = sech;

    var ddd = document.getElementById('dat');
    var mmm = document.getElementById('monn');
    var dayy = document.getElementById('da');
    let week = null;
    let mmonth = null;

    if (day == 1) {
        week = 'Mon';
    }
    if (day == 2) {
        week = 'Tue';
    }
    if (day == 3) {
        week = 'Wed';
    }
    if (day == 4) {
        week = 'Thu';
    }
    if (day == 5) {
        week = 'Fri';
    }
    if (day == 6) {
        week = 'Sat';
    }
    if (day == 0) {
        week = 'Sun';
    }

    if (month == 0) {
        mmonth = 'Jan';
    }
    if (month == 0) {
        mmonth = 'Jan';
    }
    if (month == 2) {
        mmonth = 'Feb';
    }
    if (month == 3) {
        mmonth = 'March';
    }
    if (month == 4) {
        mmonth = 'May';
    }
    if (month == 5) {
        mmonth = 'Jun';
    }
    if (month == 6) {
        mmonth = 'Jul';
    }
    if (month == 7) {
        mmonth = 'Aug';
    }
    if (month == 8) {
        mmonth = 'Sept';
    }
    if (month == 9) {
        mmonth = 'Oct';
    }
    if (month == 10) {
        mmonth = 'Nov';
    }
    if (month == 11) {
        mmonth = 'Dec';
    }

    ddd.innerHTML = daydate;
    mmm.innerHTML = mmonth;
    dayy.innerHTML = time.getFullYear();

}, 1000);