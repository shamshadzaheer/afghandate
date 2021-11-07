function gregorian_to_jalali(g_y, g_m, g_d) {
	g_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	j_days_in_month = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];

	gy = g_y - 1600;
	gm = g_m - 1;
	gd = g_d - 1;

	g_day_no = 365 * gy + divide(gy + 3, 4) - divide(gy + 99, 100) + divide(gy + 399, 400);

	for (i = 0; i < gm; ++i) {
		g_day_no += g_days_in_month[i];
	}
	if (gm > 1 && ((gy % 4 == 0 && gy % 100 != 0) || (gy % 400 == 0))) {
		/* leap and after Feb */
		g_day_no++;
	}
	g_day_no += gd;

	j_day_no = g_day_no - 79;

	j_np = divide(j_day_no, 12053); /* 12053 = 365*33 + 32/4 */
	j_day_no = j_day_no % 12053;

	jy = 979 + 33 * j_np + 4 * divide(j_day_no, 1461); /* 1461 = 365*4 + 4/4 */

	j_day_no %= 1461;

	if (j_day_no >= 366) {
		jy += divide(j_day_no - 1, 365);
		j_day_no = (j_day_no - 1) % 365;
	}

	for (i = 0; i < 11 && j_day_no >= j_days_in_month[i]; ++i) {
		j_day_no -= j_days_in_month[i];
	}

	jm = i + 1;
	jd = j_day_no + 1;

	return [jy, jm, jd];
}


function showdate() {
	let week = ["يکشنبه", "دوشنبه", "سېشنبه","چارشنبه", "پنجشنبه", "جمعه", "شنبه"];
	months = ["وري", "غويي" ,"غبرګولي", "چنګاښ","زمري", "وږي", "تلې", "لړم","ليندۍ", "مرغومې", "سلواغې","کب"];
	a = new Date();
	d = a.getDay();
	day = a.getDate();
	month = a.getMonth() + 1;
	year = a.getFullYear();

	afghan = gregorian_to_jalali(year, month, day);
	year = afghan[0];
	month = afghan[1];
	day = afghan[2];

	af_digits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
	year = year + "";
	af_first = parseInt(year.substring(0, 1));
	af_second = parseInt(year.substring(1, 2));
	af_third = parseInt(year.substring(2, 3));
	af_fourth = parseInt(year.substring(3, 4));

	day = day + "";

	if (day.length > 1) {
		day = af_digits[parseInt(day.substring(0, 1))] + af_digits[parseInt(day.substring(1, 2))];
	} else {
		day = af_digits[parseInt(day)];
	}
	afyear = af_digits[af_first] + af_digits[af_second] + af_digits[af_third] + af_digits[af_fourth];
	return week[d] + " د " + afyear + " لمريز کال د " + months[month - 1] + " " + day;
}

function divide(a,b) {
    return Math.floor((a / b));
}

console.log(showdate());