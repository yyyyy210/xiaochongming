export default {
  'GET /api/userInfo': (rep,res) => res.json({code:60001,data:{name:'木爷',id:'101',des:'木爷机器人'},meg:'获取用户信息'}),
  'GET /api/users': (rep,res) => res.json([{"id":1,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz","address":{"street":"Kulas Light","suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874","geo":{"lat":"-37.3159","lng":"81.1496"}},"phone":"1-770-736-8031 x56442","website":"hildegard.org","company":{"name":"Romaguera-Crona","catchPhrase":"Multi-layered client-server neural-net","bs":"harness real-time e-markets"}},{"id":2,"name":"Ervin Howell","username":"Antonette","email":"Shanna@melissa.tv","address":{"street":"Victor Plains","suite":"Suite 879","city":"Wisokyburgh","zipcode":"90566-7771","geo":{"lat":"-43.9509","lng":"-34.4618"}},"phone":"010-692-6593 x09125","website":"anastasia.net","company":{"name":"Deckow-Crist","catchPhrase":"Proactive didactic contingency","bs":"synergize scalable supply-chains"}},{"id":3,"name":"Clementine Bauch","username":"Samantha","email":"Nathan@yesenia.net","address":{"street":"Douglas Extension","suite":"Suite 847","city":"McKenziehaven","zipcode":"59590-4157","geo":{"lat":"-68.6102","lng":"-47.0653"}},"phone":"1-463-123-4447","website":"ramiro.info","company":{"name":"Romaguera-Jacobson","catchPhrase":"Face to face bifurcated interface","bs":"e-enable strategic applications"}}]),
  'GET /api/guide/sdk': (rep,res) => res.json([{"id":1,"name":"安卓","banben":'1.0',"jcbanben":'1',beizhu:'第一次发布',time:'5563453453444'},{"id":2,"name":"安卓","banben":'2.0',"jcbanben":'1',beizhu:'第一次发布',time:'5563453453444'},{"id":3,"name":"安卓","banben":'2.05',"jcbanben":'1',beizhu:'第一次发布',time:'5563453453444'},{"id":4,"name":"安卓","banben":'2.35',"jcbanben":'1',beizhu:'第一次发布',time:'5563453453444'},{"id":5,"name":"安卓","banben":'2.59',"jcbanben":'1',beizhu:'第一次发布',time:'5563453453444'}]),
};