<template>
  <div class="footer">
    <div class="footer__rights">
      <p>© 2016 Merkury All Right Reserved </p>
    </div>
    <div class="footer__links">
      <ul class="web">
        <li><a href="/">Pricing</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
      <ul class="social">
        <li>
          <a target="_blank" href="https://www.facebook.com">
            <img src="../assets/footer/fb.png" alt="Facebook">
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.google.com">
            <img src="../assets/footer/google.png" alt="Google">
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com">
            <img src="../assets/footer/tw.png" alt="Twitter">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.footer{
  padding: 60px 0;
  background-color: #0e1a35;
  color: #8492af;
  display: flex;
  justify-content: space-around;
  &__links{
    display: flex;
    .web{
      li{
        margin: 0 25px;
        a{
          text-decoration: none;
          color: #8492af;
        }
      }
    }
    .social{
      li{
        margin: 0 8px;
      }
    }
    ul{
      display: flex;
      li{
        list-style: none;
      }
    }
  }
}
</style>