# title space rectangle
* fiction:    x="0" y="1770" width="1800" height="590"
* nonfiction: x="0" y="0" width="1800" height="590"
* poetry:     do not display rectangle

#feature shape
## height & width
* if across:
height and width of shape = 1620px / number of shapes

* if down:
height and width of shape = 2120px / number of shapes

* if diagonal:
height and width of shape = 2670px / number of shapes


## new shape instance
* if across:
  x = x + width * 1.1
  y = y

* if down:
  x = x
  y = y + height * 1.1

* if diagonal:
  x = x +  width * 1.1
  y = y + height * 1.1


## margin
* if detach:
  margin = size * .9

* if touch:
  margin = 0

* if union:
  margin = -(size * .67)

* if overlap:
  margin is 

* if subtract:
  margin is 

* if intersect:
  margin is 


##rotation
* 0 degrees
* or 15 degrees
  
#texture
* parametric

#color
* fill="#01295f"
* fill="#437f97"
* fill="#849324"
* fill="#ffb30f"
* fill="#fd151b"
