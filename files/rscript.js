function resultb(){
	var c,a,e,u,l,m,r,g,p,n,t,d,o,b,v,N,i,s,f,x,y,B,E,F,H=0;
	c=Number(document.cgpacalc.gpa1.value),
	a=Number(document.cgpacalc.gpa2.value),
	e=Number(document.cgpacalc.gpa3.value),
	u=Number(document.cgpacalc.gpa4.value),
	l=Number(document.cgpacalc.gpa5.value),
	m=Number(document.cgpacalc.gpa6.value),
	r=Number(document.cgpacalc.gpa7.value),
	g=Number(document.cgpacalc.gpa8.value),
	p=Number(document.cgpacalc.gpa9.value),/*
	n=Number(document.cgpacalc.gpa10.value),
	t=Number(document.cgpacalc.gpa11.value),
	d=Number(document.cgpacalc.gpa12.value),*/
	H=(c*(o=Number(document.cgpacalc.cr1.value))+a*(b=Number(document.cgpacalc.cr2.value))+e*(v=Number(document.cgpacalc.cr3.value))+u*(N=Number(document.cgpacalc.cr4.value))+l*(i=Number(document.cgpacalc.cr5.value))+m*(s=Number(document.cgpacalc.cr6.value))+r*(f=Number(document.cgpacalc.cr7.value))+g*(x=Number(document.cgpacalc.cr8.value))+p*(y=Number(document.cgpacalc.cr9.value))/*+n*(B=Number(document.cgpacalc.cr10.value))+t*(E=Number(document.cgpacalc.cr11.value))+d*(F=Number(document.cgpacalc.cr12.value))*/)/(o+b+v+N+i+s+f+x+y/*+B+E+F*/),document.getElementById("cgpadisp").innerHTML=H.toFixed(2)}
