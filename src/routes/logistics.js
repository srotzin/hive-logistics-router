'use strict';const{Router}=require('express');const e=require('../services/logistics-engine');const r=Router();
r.post('/v1/logistics/route',(q,s)=>{const result=e.execute(q.body);s.status(201).json({status:'completed',result})});
r.post('/v1/logistics/track',(q,s)=>{const result=e.execute(q.body);s.status(201).json({status:'completed',result})});
r.get('/v1/logistics/stats',(_,s)=>s.json(e.getStats()));
r.get('/v1/logistics/records',(_,s)=>s.json({records:e.listRecords()}));
module.exports=r;
