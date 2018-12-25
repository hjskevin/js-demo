//Promise的实现
Promise.prototype.then=function(resolve,reject){
  var next=this._next||(this._next=Promise());
  var status=this.status;
  var x;

  if('pending'===status){
    isFn(resolve)&&this._resolves.push(resolve);
    isFn(reject)&&this._rejects.push(reject);
    return next;
  }

  if('resolved'===status){
    if(!isFn(resolve)){
      next.resolve(resolve);
    }else{
      try{
        x=resolve(this.value);
        resolveX(nex,x);
      }catch(e){
        this.reject(e);
      }
    }
    return next;
  }

  if('rejected'===status){
    if(!isFn(reject)){
      next.reject(reject);
    }else{
      try{
        x=reject(this.reason);
        resolveX(next,x)
      }catch(e){
        this.reject(e);
      }
    }
    return next;
  }
}



//promise 函数实现
function sleep(ms){
  return function(v){
    var p=Promise();
    setTimeout(function(){
      p.resolve(v);
    });
  }
};

function getImg(url){
  var p=Promise();
  var img=new Image();
  img.onload=function(){
    p.resolve(this);
  };
  img.onerror=function(err){
    p.reject(err);
  };
  img.url=url;
  return p;
};


function addImg(img){
  $('#list').find('> li:last-child')
}