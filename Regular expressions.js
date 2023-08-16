const validator ={
    validEmail(email){
        const regexp = /^[\w\d][a-zA-Z\d.+-]{1,20}@[\w.!$%&’*+/=?^_-]{1,15}\.[a-zA-Z]{1,5}$/;
        return regexp.test(email);
    },
    validatePhone(phone){
        const regexp = /^(\+\d{2})?[\s-]*\(?\d{3}\)?(?:[\s-]*\d){7}$/;
        return regexp.test(phone)
    },
    validatePassword(password){
        const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
        return regexp.test(password)
    }
}


/* Email */
//true
console.log(validator.validEmail('fi@secondpart.end'));
console.log(validator.validEmail('first-part@.se=cond%p.art.end'));
console.log(validator.validEmail('first.part@se=cond%part.r'));
//false
console.log(validator.validEmail('f@secondart.end,'));
console.log(validator.validEmail('first-part@.se=cond@part.end'));
console.log(validator.validEmail('-firstpart@.se=cond%.enddeded'));
console.log(validator.validEmail('firs_tpart@.se.en'));
console.log(validator.validEmail('firstpart@.se.enddeded'));

/* Phone */

//true
console.log(validator.validatePhone('+38 (099) 567 8901'));
console.log(validator.validatePhone('+38 099 5 6 7 8 9  01'));
console.log(validator.validatePhone('(09-9) 567-890-1'));
console.log(validator.validatePhone('--  (099) 567 890-1'));
//false
console.log(validator.validatePhone('+38 (099) 567 8901 0'));
console.log(validator.validatePhone('+38 099 a0000000'));
console.log(validator.validatePhone('+38 (0989) 567 8901'));
console.log(validator.validatePhone('+48 (0989) 567 8901'));

/*Password*/

//true
console.log(validator.validatePassword('C00l_Pass'));
console.log(validator.validatePassword('SupperPas1'));

//false
console.log(validator.validatePassword('Cool_pass'));
console.log(validator.validatePassword('C00l'));
