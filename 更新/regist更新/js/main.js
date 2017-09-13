function send(){
	var account=jieshou('account',12,8);
	var name=jieshou0();
	var wechat=jieshou2();
	var alipay=jieshou4();
	var bank=jieshoua('bank');
	var alipayo=jieshoup('baccount');
	var mobile=phonetext();
	var reg_password=jieshou('reg_password',12,8);
	var nam=jieshou('nam',12,8);
	var r_password=jieshoub('r_password');
	var safecode=jieshou('safecode',6,6);
	var r_safecode=jieshoub('r_safecode');
	var mobile_code=jieshouaa("mobile_code");
	if(name==1){
		return false;
	}else if(account==1){
		return false;
	}else if(alipay==1){
		return false;
	}else if(wechat==1){
		return false;
	}else if(baccount==1){
		return false;
	}else if(bank==1){
		return false;
	}else if(mobile==1){
		return false;
	}else if(reg_password==1){
		return false;
	}else if(r_password==1){
		return false;
	}else if(mobile_code==1){
		return false;
	}else if(safecode==1){
		return false;
	}else if(r_safecode==1){	
		return false;
	}else if(nam==1){	
		return false;
	}else{
		var account=$("#account").val();
		var name=$("#name").val();
		var wechat=$("#wechat").val();
		var alipay=$("#alipay").val();
		var bank=$("#bank").val();
		var baccount=$("#baccount").val();
		var mobile=$("#mobile").val();
		var password=$("#reg_password").val();
		var safecode=$("#safecode").val();
		var refer=$("#refer_account").val();
		$.ajax({
			type:"post",
			url:"login/adduser",
			data:"account="+account+"&name="+name+"&wechat="+wechat+"&alipay="+alipay+"&bank="+bank+"&baccount="+baccount+"&mobile="+mobile+
			"&password="+password+"&payPwd="+safecode+"&referaccount="+refer,
			dateType:"text",
			async:true,
			success:function(re){
				alert(re);
			}
		});
	}		
}
function jieshou(a,b,c){
var label1 = document.getElementById("label1"+a);
var label2 = document.getElementById("label2"+a);
var label3 = document.getElementById("label3"+a);
var label4 = document.getElementById("label4"+a);
var nametext = document.getElementById(a).value;
var valiLen=getByteVal(nametext,b,c);  
if(nametext==""){
label1.style.display = 'none';
label2.style.display = 'block';
label3.style.display = 'none';
label4.style.display = 'none';
return 1;
}
else if(valiLen==0){
label1.style.display = 'none';
label2.style.display = 'none';
label3.style.display = 'block';
label4.style.display = 'none';
return 1;
}
else{
label1.style.display = 'none';
label2.style.display = 'none';
label3.style.display = 'none';
label4.style.display = 'block';

}
 
}
function getByteVal(val, max, mix) {  
    var returnValue = '';  
    var byteValLen = 0;  
    for (var i = 0; i < val.length; i++) {  
        if (val[i].match(/[^\x00-\xff]/ig) != null)  
            byteValLen += 2;  
        else  
            byteValLen += 1;  
    }  
    if (byteValLen < mix|| byteValLen > max){  
     return 0
    }else{  
     return 1;  
    }  
}
function jieshoub(a){
var label1 = document.getElementById("label1"+a);
var label2 = document.getElementById("label2"+a);
var label3 = document.getElementById("label3"+a);
var label4 = document.getElementById("label4"+a);
var nametextp = document.getElementById(a).value;
if(a=="r_password"){
	var nametext = document.getElementById("reg_password").value;
}else{
	var nametext = document.getElementById("safecode").value;
}

	if(nametextp==""){
label1.style.display = 'none';
label2.style.display = 'block';
label3.style.display = 'none';
label4.style.display = 'none';
return 1;
}
else if(nametextp!=nametext){
label1.style.display = 'none';
label2.style.display = 'none';
label3.style.display = 'block';
label4.style.display = 'none';
return 1;
}
else{
label1.style.display = 'none';
label2.style.display = 'none';
label3.style.display = 'none';
label4.style.display = 'block';
reyurntrue;
}



 
}
function jieshoup(a){
var label1 = document.getElementById("label1"+a);
var label2 = document.getElementById("label2"+a);
var label3 = document.getElementById("label3"+a);
var label4 = document.getElementById("label4"+a);
var nametext = document.getElementById(a).value;
var valiLen=luhmCheck(nametext);
if(nametext==""){
label1.style.display = 'none';
label2.style.display = 'block';
label3.style.display = 'none';
label4.style.display = 'none';
return 1;
}
else if(valiLen==0){
label1.style.display = 'none';
label2.style.display = 'none';
label3.style.display = 'block';
label4.style.display = 'none';
return 1;
}
else if(valiLen==1){
label1.style.display = 'none';
label2.style.display = 'none';
label3.style.display = 'none';
label4.style.display = 'block';

}
 
}
function getByteValp(val) {  
if (!/^(\d{16}|\d{19})$/.test(val)){  
     return 0
    }else{  
     return 1;  
    }  
}
function formatBankNo (BankNo){
    if (BankNo.value == "") return;
    var account = new String (BankNo.value);
    account = account.substring(0,23); 
    if (account.match (".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}") == null){
        /* 对照格式 */
        if (account.match (".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|" + ".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|" +
        ".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|" + ".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}") == null){
            var accountNumeric = accountChar = "", i;
            for (i=0;i<account.length;i++){
                accountChar = account.substr (i,1);
                if (!isNaN (accountChar) && (accountChar != " ")) accountNumeric = accountNumeric + accountChar;
            }
            account = "";
            for (i=0;i<accountNumeric.length;i++){   
                if (i == 4) account = account + " "; 
                if (i == 8) account = account + " "; 
                if (i == 12) account = account + " ";
                if (i == 16) account = account + " ";
                account = account + accountNumeric.substr (i,1)
            }
        }
    }
    else
    {
        account = " " + account.substring (1,5) + " " + account.substring (6,10) + " " + account.substring (14,18) + "-" + account.substring(18,25);
    }
    if (account != BankNo.value) BankNo.value = account;
}
function formatPhone (BankNo){
    if (BankNo.value == "") return;
    var account = new String (BankNo.value);
    account = account.substring(0,11); 
     if (account.match (".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}") == null){
        /* 对照格式 */
        if (account.match (".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|" + ".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|" +
        ".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|" + ".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}") == null){
            var accountNumeric = accountChar = "", i;
            for (i=0;i<account.length;i++){
                accountChar = account.substr (i,1);
                if (!isNaN (accountChar) && (accountChar != " ")) accountNumeric = accountNumeric + accountChar;
            }
            account = "";
            for (i=0;i<accountNumeric.length;i++){   
                if (i == 4) account = account; 
                if (i == 8) account = account; 
                if (i == 12) account = account;
  
                account = account + accountNumeric.substr (i,1)
            }
        }
    }
    else
    {
        account = " " + account.substring (1,5) + " " + account.substring (6,10) + " " + account.substring (14,18) + "-" + account.substring(18,25);
    }
    if (account != BankNo.value) BankNo.value = account;
    
   
}
function luhmCheck(banknop){
	var bankno=banknop.replace(/\s+/g,"");
		if (bankno.length < 16 || bankno.length > 19) {
			
			return 0;
			
		}
		var num = /^\d*$/;  
		if (!num.exec(bankno)) {
			
			return 0;
			
		}
		//开头6位
		var strBin="10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";    
		if (strBin.indexOf(bankno.substring(0, 2))== -1) {
			
			return 0;
			
		}else{
        return 1;
       
        }        
    }

function jieshou0(){
var label5 = document.getElementById("label5");
var label6 = document.getElementById("label6");
var label8 = document.getElementById("label8");
var nametext = document.getElementById("name").value;
if(nametext==""){
label5.style.display = 'none';
label6.style.display = 'block';
label8.style.display = 'none';
return 1;
}

else{
label5.style.display = 'none';
label6.style.display = 'none';
label8.style.display = 'block';

}
 
}
  
function jieshou2(){
var label9 = document.getElementById("label9");
var label10 = document.getElementById("label10");
var labelp = document.getElementById("labelp");
var nametext = document.getElementById("wechat").value;
if(nametext==""){
label9.style.display = 'none';
label10.style.display = 'block';
labelp.style.display = 'none';
return 1;
}

else{
label9.style.display = 'none';
label10.style.display = 'none';
labelp.style.display = 'block';

}
 
}
  
function jieshou4(){
var label12 = document.getElementById("label12");
var label13 = document.getElementById("label13");
var label14 = document.getElementById("label14");
var nametext = document.getElementById("alipay").value;
if(nametext==""){
label12.style.display = 'none';
label13.style.display = 'block';
label14.style.display = 'none';
return 1;
}

else{
label12.style.display = 'none';
label13.style.display = 'none';
label14.style.display = 'block';

}
 
}
  

function phonetext(){
	var label18 = document.getElementById("label18");
	var label100 = document.getElementById("label100");
var label19 = document.getElementById("label19");
var label16 = document.getElementById("label16");
var phonetext = document.getElementById("mobile").value;
if(phonetext==""){
        label18.style.display = 'block'; 
		 label19.style.display = 'none'; 
        label16.style.display = 'none';
        label100.style.display = 'none';
        return 1;
}
else if(!(/^1[3|4|5|7|8]\d{9}$/.test(phonetext))){ 
        label18.style.display = 'none'; 
		 label19.style.display = 'none'; 
        label16.style.display = 'block'; //*手机号码错误
        label100.style.display = 'none';
        return 1;
    } 
else{
	  label18.style.display = 'none'; 
		 label19.style.display = 'block'; 
        label16.style.display = 'none';
        label100.style.display = 'none';
        
}
}

function jieshoua(a){
var labela = document.getElementById("labela"+a);
var labelb = document.getElementById("labelb"+a);
var labelc = document.getElementById("labelc"+a);
	var nametext = document.getElementById(a).value;
	if(nametext==""){
	labela.style.display = 'none';
	labelb.style.display = 'block';
	labelc.style.display = 'none';
	return 1;

	}else{
	labela.style.display = 'none';
	labelb.style.display = 'none';
	labelc.style.display = 'block';
	
	}

 
}

function jieshouaa(a){
var labelb = document.getElementById("labelb"+a);
var labela = document.getElementById("labelb"+a+"1");
	var nametext = document.getElementById(a).value;
	if(nametext==""){
	labelb.style.display = 'block';
	labela.style.display = 'none';
	return 1;

	}else{
		labelb.style.display = 'none';
	labela.style.display = 'none';
	}

 
}