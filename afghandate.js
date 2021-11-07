function gregorian_to_jalali(g_y, g_m, g_d) {
	let g_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	let j_days_in_month = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];

	let gy = g_y - 1600;
	let gm = g_m - 1;
	let gd = g_d - 1;

	let g_day_no = 365 * gy + divide(gy + 3, 4) - divide(gy + 99, 100) + divide(gy + 399, 400);

	for (let i = 0; i < gm; ++i) {
		g_day_no += g_days_in_month[i];
	}
	if (gm > 1 && ((gy % 4 == 0 && gy % 100 != 0) || (gy % 400 == 0))) {
		// leap and after Feb
		g_day_no++;
	}
	g_day_no += gd;

	let j_day_no = g_day_no - 79;

	let j_np = divide(j_day_no, 12053); // 12053 = 365*33 + 32/4
	j_day_no = j_day_no % 12053;

	let jy = 979 + 33 * j_np + 4 * divide(j_day_no, 1461); // 1461 = 365*4 + 4/4

	j_day_no %= 1461;

	if (j_day_no >= 366) {
		jy += divide(j_day_no - 1, 365);
		j_day_no = (j_day_no - 1) % 365;
	}

	for (var i = 0; i < 11 && j_day_no >= j_days_in_month[i]; ++i) {
		j_day_no -= j_days_in_month[i];
	}

	let jm = i + 1;
	let jd = j_day_no + 1;

	return {
		year: jy,
		month: jm,
		day: jd,
		toString: `${jd}/${jm}/${jy}`,
	};
}


function showdate() {
	let week = ["يکشنبه", "دوشنبه", "سېشنبه","چارشنبه", "پنجشنبه", "جمعه", "شنبه"];
	let months = ["وري", "غويي" ,"غبرګولي", "چنګاښ","زمري", "وږي", "تلې", "لړم","ليندۍ", "مرغومې", "سلواغې","کب"];
	let a = new Date();
	let d = a.getDay();
	let day = a.getDate();
	let month = a.getMonth() + 1;
	let year = a.getFullYear();

	let afghan = gregorian_to_jalali(year, month, day);
	year = afghan.year;
	month = afghan.month;
	day = afghan.day;

	let af_digits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
	year = year + "";
	let af_first = parseInt(year.substring(0, 1));
	let af_second = parseInt(year.substring(1, 2));
	let af_third = parseInt(year.substring(2, 3));
	let af_fourth = parseInt(year.substring(3, 4));

	day = day + "";

	if (day.length > 1) {
		day = af_digits[parseInt(day.substring(0, 1))] + af_digits[parseInt(day.substring(1, 2))];
	} else {
		day = af_digits[parseInt(day)];
	}
	let afyear = af_digits[af_first] + af_digits[af_second] + af_digits[af_third] + af_digits[af_fourth];
	return week[d] + " د " + afyear + " لمريز کال د " + months[month - 1] + " " + day;
}

function divide(a,b) {
    return Math.floor((a / b));
}

export default showdate;
