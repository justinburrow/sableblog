<template>
  <div class="home-features">
    <div class="content">
      <div class="video">
        <video poster="~@/assets/images/video-poster.jpg" controls playsinline><source src="https://www.sablelabs.co/documents/Sable-Labs-Coupledom-Launch_021420.mp4" type="video/mp4" /></video>
      </div>
      <div class="coupledom">
        <div class="coupledom-content">
          <h3>Coupledom Movement</h3>
          <h4>Coupledom / (‘Kapaldam)</h4>
          <p>The realm of shared experiences between two partners in life or business, creating extraordinary outcomes.</p>
          <g-link to="/coupledom"><a href="#">Read More</a></g-link>
        </div>
      </div>
    </div>
    <div class="titles only-desktop">
      <h4>Video</h4>
      <h4>Couples</h4>
    </div>
  </div>
</template>


<script>
export default {
  name: 'HomeFeatures',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .home-features {
    background-color: #f2f2f2;
    padding: 30px 0;
    box-shadow: 0px 10px 14px 0px rgba(0,0,0,0.3);
    .content, .titles {
      display: flex;
      width: 100%;
      max-width: 1600px;
      margin: 0 auto;
      justify-content: space-between;
      flex-wrap: wrap;
      @media screen and (max-width: 1600px) {
        padding: 0 20px;
      }
      div, h4 {
        width: calc(50% - 15px);
        @media screen and (max-width: $breakpoint-xl) {
          width: 100%;
        }
      }
      .video {
        position: relative;
        video {
          object-fit: fill;
          display: block;
          width: 100%;
        }
      }
      .coupledom {
        background-image: url('~@/assets/images/coupledom-background.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        @media screen and (max-width: $breakpoint-xl) {
          margin-top: 30px;
          padding-top: 56%;
        }
        .coupledom-content {
          font-family: 'acumin-pro', 'Helvetica Neue', sans-serif;
          font-weight: 300;
          font-style: normal;
          text-align: center;
          padding: 0 20px;
          width: 100%;
          color: white;
          position: absolute;
          top: 50%;
          transform: translateY(-40%);
          h3, h4 {
            margin: 0;
            padding: 0;
          }
          h3 {
            font-family: 'acumin-pro-extra-condensed', 'Helvetica Neue', sans-serif;
            font-weight: 600;
            font-style: normal;
            text-transform: uppercase;
            font-size: 3.5rem;
            letter-spacing: 1px;
            @media screen and (max-width: $breakpoint-md) {
              font-size: 8vw;
            }
          }
          h4 {
            font-family: 'acumin-pro', 'Helvetica Neue', sans-serif;
            width: 100%;
            font-size: 1rem;
            font-weight: bold;
            text-transform: none;
            letter-spacing: .5px;
            margin-bottom: 10px;
          }
          p {
            max-width: 400px;
            margin: 0 auto 60px auto;
            @media screen and (max-width: $breakpoint-md) {
              margin-bottom: 20px;
            }
          }
          a {
            display: inline-block;
            text-decoration: none;
            font-family: 'acumin-pro-condensed', 'Helvetica Neue', sans-serif;
            font-weight: 600;
            background: linear-gradient(0deg, #18413c 50%, #224c45 50%);
            color: white;
            border-radius: 0;
            border: none;
            text-transform: uppercase;
            font-size: 1.3rem;
            padding: 3px 20px;
          }
        }
      }
      h4 {
        text-transform: uppercase;
        font-family: 'acumin-pro-condensed', 'Helvetica Neue', sans-serif;
        font-weight: 300;
        font-style: normal;
        margin: 5px 0 0 0;
        padding: 0;
        font-size: .9rem;
      }
    }
  }

</style>
