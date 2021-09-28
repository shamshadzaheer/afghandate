
function gregorian_to_jalali(g_y, g_m, g_d) {
	g_days_in_month = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	j_days_in_month = new Array(31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29);

	gy = g_y - 1600;
	gm = g_m - 1;
	gd = g_d - 1;

	g_day_no = 365 * gy + div(gy + 3, 4) - div(gy + 99, 100) + div(gy + 399, 400);

	for (i = 0; i < gm; ++i)
		g_day_no += g_days_in_month[i];
	if (gm > 1 && ((gy % 4 == 0 && gy % 100 != 0) || (gy % 400 == 0)))
		/* leap and after Feb */
		g_day_no++;
	g_day_no += gd;

	j_day_no = g_day_no - 79;

	j_np = div(j_day_no, 12053); /* 12053 = 365*33 + 32/4 */
	j_day_no = j_day_no % 12053;

	jy = 979 + 33 * j_np + 4 * div(j_day_no, 1461); /* 1461 = 365*4 + 4/4 */

	j_day_no %= 1461;

	if (j_day_no >= 366) {
		jy += div(j_day_no - 1, 365);
		j_day_no = (j_day_no - 1) % 365;
	}

	for (i = 0; i < 11 && j_day_no >= j_days_in_month[i]; ++i)
		j_day_no -= j_days_in_month[i];
	jm = i + 1;
	jd = j_day_no + 1;

	return new Array(jy, jm, jd);
}


function showdate() {
	week = new Array("&#1610;&#1705;&#1588;&#1606;&#1576;&#1607;", "&#1583;&#1608;&#1588;&#1606;&#1576;&#1607;", "&#1587;&#1744;&#1588;&#1606;&#1576;&#1607;",
		"&#1670;&#1575;&#1585;&#1588;&#1606;&#1576;&#1607;", "&#1662;&#1606;&#1580;&#1588;&#1606;&#1576;&#1607;", "&#1580;&#1605;&#1593;&#1607;", "&#1588;&#1606;&#1576;&#1607;"
	);
	months = new Array("&#1608;&#1585;&#1610;", "&#1594;&#1608;&#1610;&#1610;",
		"&#1594;&#1576;&#1585;&#1707;&#1608;&#1604;&#1610;", "&#1670;&#1606;&#1707;&#1575;&#1690;",
		"&#1586;&#1605;&#1585;&#1610;", "&#1608;&#1686;&#1610;", "&#1578;&#1604;&#1744;", "&#1604;&#1683;&#1605;",
		"&#1604;&#1610;&#1606;&#1583;&#1741;", "&#1605;&#1585;&#1594;&#1608;&#1605;&#1744;", "&#1587;&#1604;&#1608;&#1575;&#1594;&#1744;",
		"&#1705;&#1576;");
	a = new Date();
	d = a.getDay();
	day = a.getDate();
	month = a.getMonth() + 1;
	year = a.getFullYear();



	afghan = gregorian_to_jalali(year, month, day);
	year = afghan[0];
	month = afghan[1];
	day = afghan[2];

	af_digits = new Array("&#1632;", "&#1633;", "&#1634;", "&#1635;", "&#1636;", "&#1637;", "&#1638;", "&#1639;", "&#1640;", "&#1641;");
	year = year + "";
	af_first = parseInt(year.substring(0, 1));
	af_second = parseInt(year.substring(1, 2));
	af_third = parseInt(year.substring(2, 3));
	af_fourth = parseInt(year.substring(3, 4));

	day = day + "";

	if (day.length > 1)
		day = af_digits[parseInt(day.substring(0, 1))] + af_digits[parseInt(day.substring(1, 2))];
	else
		day = af_digits[parseInt(day)];
	afyear = af_digits[af_first] + af_digits[af_second] + af_digits[af_third] + af_digits[af_fourth];
	return week[d] + " &#1583; " + afyear + " &#1604;&#1605;&#1585;&#1610;&#1586; &#1705;&#1575;&#1604; &#1583; " + months[month - 1] + " " + day;
}
