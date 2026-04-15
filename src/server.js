'use strict';
const express=require('express');const cors=require('cors');const app=express();const PORT=process.env.PORT||3022;
app.use(cors());app.use(express.json());app.use('/',require('./routes/health'));app.use('/',require('./routes/logistics'));
app.get('/',(_,r)=>r.json({service:'hive-logistics-router',version:'1.0.0',description:'Supply chain and logistics routing — optimal paths, carrier selection, tracking',endpoints:{"route":"POST /v1/logistics/route","track":"POST /v1/logistics/track","stats":"GET /v1/logistics/stats","records":"GET /v1/logistics/records","health":"GET /health","pulse":"GET /.well-known/hive-pulse.json"}}));
const hc=require('./services/hive-client');
app.listen(PORT,async()=>{console.log(`[hive-logistics-router] Listening on port ${PORT}`);try{await hc.registerWithHiveTrust()}catch(e){}try{await hc.registerWithHiveGate()}catch(e){}});
module.exports=app;
