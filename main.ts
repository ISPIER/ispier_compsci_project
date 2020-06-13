controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 1 . . . 
. . . . . . . . . . . 1 . . . . 
. . . . . . . . . . 1 . . . . . 
. . . . . . . . . 1 . . . . . . 
. . . . . 1 . . 1 . . . . . . . 
. . . . . . 1 1 . . . . . . . . 
. . . . . . 1 1 . . . . . . . . 
. . . . . 1 . . 1 . . . . . . . 
. . . . 1 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, humanWithGun, -200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Zombie.destroy()
    Zombie.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 1 . . 1 . . . . . . . 
. . . . . . 1 1 . . . . . . . . 
. . . . . . 1 1 . . . . . . . . 
. . . . . 1 . . 1 . . . . . . . 
`, humanWithGun, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    humanWithGun.destroy()
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let Zombie: Sprite = null
let projectile2: Sprite = null
let humanWithGun: Sprite = null
humanWithGun = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 6 6 6 6 6 . . . . . . 
. . . . . 6 d d d 6 6 6 . . . . 
. . . . . d e d e d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . . d d d . . . . . . . 
. . 1 1 1 1 1 d 1 1 6 6 . . . . 
. 1 1 1 1 6 1 1 1 1 6 6 6 . . . 
1 1 . . 1 1 6 1 1 6 6 . 6 6 . . 
1 . . . 1 6 1 1 6 1 6 . 1 1 1 1 
. . . . . 1 6 1 1 6 . . 1 . . . 
. . . . . . 1 . 6 . . . . . . . 
. . . . . . e . e . . . . . . . 
. . . . . e e . e e . . . . . . 
`, SpriteKind.Player)
info.setLife(10)
humanWithGun.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(humanWithGun)
humanWithGun.setVelocity(200, 200)
game.onUpdateInterval(1000, function () {
    Zombie = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . . . 6 6 6 6 f 6 6 . . . . 
. . . . . 6 f 6 6 6 6 6 . . . . 
. . . . 6 6 6 6 6 f 6 6 . . . . 
. . . . . 6 6 f f f f 6 . . . . 
. . . . . . 6 6 6 6 6 . . . . . 
. . . . . . e e e e e . . . . . 
. . . . . e e e e e e e . . . . 
. . . . . e e e e e e e . . . . 
. . . . . 7 6 e e e e e . . . . 
. . . . . e 6 7 e e e e . . . . 
. . . . . . e 6 e e e . . . . . 
. . . . . . . 7 e 6 . . . . . . 
. . . . . . . 6 . 7 . . . . . . 
. . . . . . 7 7 . 7 6 . . . . . 
`, SpriteKind.Enemy)
    Zombie.setVelocity(-70, 5)
    Zombie.setPosition(180, Math.randomRange(0, 120))
})
