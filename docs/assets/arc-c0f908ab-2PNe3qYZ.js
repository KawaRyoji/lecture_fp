import{w as ln,c as Q}from"./path-39bad7e2-CbwjOpE9.js";import{aQ as an,aR as X,aS as S,aT as rn,aU as y,Y as on,aV as z,aW as _,aX as un,aY as t,aZ as sn,a_ as tn,a$ as fn}from"./slidev/3-DVhckUhl.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,q,Y,v,R,U,a){var D=q-l,i=Y-h,n=U-v,m=a-R,r=m*D-n*i;if(!(r*r<y))return r=(n*(h-R)-m*(l-v))/r,[l+r*D,h+r*i]}function J(l,h,q,Y,v,R,U){var a=l-q,D=h-Y,i=(U?R:-R)/z(a*a+D*D),n=i*D,m=-i*a,r=l+n,s=h+m,f=q+n,c=Y+m,V=(r+f)/2,o=(s+c)/2,p=f-r,g=c-s,A=p*p+g*g,T=v-R,P=r*c-f*s,E=(g<0?-1:1)*z(fn(0,T*T*A-P*P)),I=(P*g-p*E)/A,O=(-P*p-g*E)/A,w=(P*g+p*E)/A,d=(-P*p+g*E)/A,x=I-V,e=O-o,u=w-V,W=d-o;return x*x+e*e>u*u+W*W&&(I=w,O=d),{cx:I,cy:O,x01:-n,y01:-m,x11:I*(v/T-1),y11:O*(v/T-1)}}function vn(){var l=cn,h=yn,q=Q(0),Y=null,v=gn,R=mn,U=pn,a=null,D=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=R.apply(this,arguments)-rn,V=un(c-f),o=c>f;if(a||(a=n=D()),s<r&&(m=s,s=r,r=m),!(s>y))a.moveTo(0,0);else if(V>on-y)a.moveTo(s*X(f),s*S(f)),a.arc(0,0,s,f,c,!o),r>y&&(a.moveTo(r*X(c),r*S(c)),a.arc(0,0,r,c,f,o));else{var p=f,g=c,A=f,T=c,P=V,E=V,I=U.apply(this,arguments)/2,O=I>y&&(Y?+Y.apply(this,arguments):z(r*r+s*s)),w=_(un(s-r)/2,+q.apply(this,arguments)),d=w,x=w,e,u;if(O>y){var W=sn(O/r*S(I)),B=sn(O/s*S(I));(P-=W*2)>y?(W*=o?1:-1,A+=W,T-=W):(P=0,A=T=(f+c)/2),(E-=B*2)>y?(B*=o?1:-1,p+=B,g-=B):(E=0,p=g=(f+c)/2)}var Z=s*X(p),j=s*S(p),C=r*X(T),F=r*S(T);if(w>y){var G=s*X(g),H=s*S(g),K=r*X(A),L=r*S(A),$;if(V<an)if($=dn(Z,j,K,L,G,H,C,F)){var M=Z-$[0],N=j-$[1],k=G-$[0],b=H-$[1],nn=1/S(tn((M*k+N*b)/(z(M*M+N*N)*z(k*k+b*b)))/2),en=z($[0]*$[0]+$[1]*$[1]);d=_(w,(r-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else d=x=0}E>y?x>y?(e=J(K,L,Z,j,s,x,o),u=J(G,H,C,F,s,x,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo(Z,j),a.arc(0,0,s,p,g,!o)):a.moveTo(Z,j),!(r>y)||!(P>y)?a.lineTo(C,F):d>y?(e=J(C,F,G,H,r,-d,o),u=J(Z,j,K,L,r,-d,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),d<w?a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,r,T,A,o)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +R.apply(this,arguments))/2-an/2;return[X(m)*n,S(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:Q(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:Q(+n),i):h},i.cornerRadius=function(n){return arguments.length?(q=typeof n=="function"?n:Q(+n),i):q},i.padRadius=function(n){return arguments.length?(Y=n==null?null:typeof n=="function"?n:Q(+n),i):Y},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:Q(+n),i):v},i.endAngle=function(n){return arguments.length?(R=typeof n=="function"?n:Q(+n),i):R},i.padAngle=function(n){return arguments.length?(U=typeof n=="function"?n:Q(+n),i):U},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as d};