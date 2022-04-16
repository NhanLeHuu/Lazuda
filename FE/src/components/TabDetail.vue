<template>
  <fragment>
    <div class="tab-content">
      <!--====== Tab 1 ======-->
      <div class="tab-pane fade show active" id="pd-desc">
        <div class="pd-tab__desc">
          <div v-if="info && info.length > 0" class="u-s-m-b-15">
            <b class="thongtin">Thông Tin Cơ Bản Sản Phẩm</b>
          </div>
          <div class="u-s-m-b-15">
            <div class="pd-table gl-scroll">
              <table>
                <tbody>
                  <tr v-for="(item, index) in thongtin" :key="index">
                    <td class="name">{{ item.name }}</td>
                    <td v-if="Object.values(item)[0] != null" class="value">
                      {{ Object.values(item)[0] }}
                    </td>
                    <td v-else class="value">Không ghi</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <el-divider v-if="info.length > 0"></el-divider>
          <div class="u-s-m-b-15">
            <b class="thongtin">Thông Chi Tiết Sản Phẩm</b>
          </div>
          <div id="mota" class="u-s-m-b-15"></div>
        </div>
      </div>
      <!--====== End - Tab 1 ======-->

      <!--====== Tab 2 ======-->
      <div class="tab-pane" id="pd-tag">
        <div class="pd-tab__tag">
          <div class="u-s-m-b-30">
            <div class="pd-tab__rev-score">
              <div v-if="chat.length == 0" class="u-s-m-b-8">
                <h2 class="ques">Sản phẩm hiện chưa có hỏi đáp.</h2>
              </div>
              <div class="u-s-m-b-8">
                <h4 class="putques">Bạn có câu hỏi cho sản phẩm này ?</h4>
              </div>

              <span class="gl-text"
                >Đặt câu hỏi ngay để có thêm thông tin từ sản phẩm</span
              >
              <img style="width: 12%" src="@/assets/about/question.png" />
            </div>
          </div>
          <div class="u-s-m-b-30">
            <form class="pd-tab__tag-f1">
              <div class="rev-f1__group">
                <div class="u-s-m-b-15">
                  <h2>{{ chat.length }} Câu hỏi & đáp về sản phẩm này</h2>
                </div>
              </div>
              <div class="rev-f1__review">
                <div
                  v-for="(user, index) in chat"
                  :key="index"
                  class="review-o u-s-m-b-15"
                >
                  <div class="review-o__info u-s-m-b-8">
                    <img :src="user.picture" />
                    <span class="review-o__name">{{ user.hoten }}</span>

                    <span class="review-o__date">{{ user.ngaygio }}</span>
                  </div>
                  <p class="review-o__text">
                    {{ user.message }}
                  </p>
                  <ul v-if="user.children.length > 0" class="reply">
                    <li v-for="(child, vitri) in user.children" :key="vitri">
                      <div class="review-o u-s-m-b-15">
                        <div class="review-o__info u-s-m-b-8">
                          <img src="../assets/logo/logo.png" />
                          <span class="review-o__name">{{ child.hoten }}</span>

                          <span class="review-o__date">{{
                            child.ngaygio
                          }}</span>
                        </div>
                        <p class="review-o__text">{{ child.message }}</p>
                      </div>
                    </li>
                  </ul>
                  <!-- <div class="chat2">
                    <input
                      class="input-text input-text--primary-style"
                      type="text"
                      placeholder="Nhập câu trả lời của bạn ở đây"
                      id="inputchat2"
                      v-model="userchat"
                      @keyup.enter="onSendChat"
                    />
                    <picker
                      v-show="showEmojiPicker"
                      title="Pick your emoji..."
                      emoji="point_up"
                      set="messenger"
                      @select="addEmoji"
                    />
                    <span
                      class="emoji-trigger"
                      :class="{ triggered: showEmojiPicker }"
                    >
                      <svg
                        @mousedown.prevent="toggleEmojiPicker"
                        style="width: 30px; height: 30px; margin-top: 9px"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#888888"
                          d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                        />
                      </svg>
                    </span>

                    <p @click.prevent="onSendChat" class="sendmess">
                      <i class="far fa-paper-plane"></i>
                    </p>
                  </div> -->
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="">
          <input
            class="input-text input-text--primary-style"
            type="text"
            placeholder="Nhập câu hỏi của bạn ở đây"
            id="inputchat"
            autocomplete="off"
            v-model="userchat"
            @keyup.enter="onSendChat"
          />
          <picker
            v-show="showEmojiPicker"
            title="Pick your emoji..."
            emoji="point_up"
            set="messenger"
            @select="addEmoji"
            :i18n="i18nchat"
            ref="chat"
            color="#ff4500"
            :emojiTooltip="true"
            :skin="2"
          />
          <span class="emoji-trigger" :class="{ triggered: showEmojiPicker }">
            <svg
              @mousedown.prevent="toggleEmojiPicker"
              style="width: 30px; height: 30px; margin-top: 9px"
              viewBox="0 0 24 24"
            >
              <path
                fill="#888888"
                d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
              />
            </svg>
          </span>

          <p @click.prevent="onSendChat" class="sendmess">
            <i class="far fa-paper-plane"></i>
          </p>
        </div>
      </div>
      <!--====== End - Tab 2 ======-->

      <!--====== Tab 3 ======-->
      <div class="tab-pane" id="pd-rev">
        <div class="pd-tab__rev">
          <div class="u-s-m-b-30">
            <div class="pd-tab__rev-score">
              <div class="u-s-m-b-8">
                <h2>Chưa có lượt đánh giá</h2>
              </div>
              <!-- <div class="gl-rating-style-2 u-s-m-b-8">
                <i class="fas fa-star"></i><i class="fas fa-star"></i
                ><i class="fas fa-star"></i><i class="fas fa-star"></i
                ><i class="fas fa-star-half-alt"></i>
              </div>
              <div class="u-s-m-b-8">
                <h4>We want to hear from you!</h4>
              </div>

              <span class="gl-text"
                >Tell us what you think about this item</span
              > -->
            </div>
          </div>
        </div>
      </div>
      <!--====== End - Tab 3 ======-->
    </div>
  </fragment>
</template>

<script>
import * as $ from "jquery";
import { Picker } from "emoji-mart-vue";
import getApi from "@/api/getApi";

export default {
  name: "TabDetail",
  props: {
    thongtin: {},
    desciption: {},
    table: {},
    id: {},
    chatprop: {},
  },
  components: {
    Picker,
  },
  data: () => ({
    showEmojiPicker: false,
    userchat: "",
    info: [],
    user: "",
    chat: [],
    i18nchat: {
      search: "Tìm kiếm biểu cảm lazuda ...",
      notfound: "Không tìm thấy",
      categories: {
        search: "Kết quả tìm kiếm",
        recent: "Đã dùng",
        people: "Mặt cười & Con người",
        nature: "Động vật & Thiên nhiên",
        foods: "Thức ăn & Đồ uống",
        activity: "Hoạt động",
        places: "Du lịch & Nơi",
        objects: "Đối tượng",
        symbols: "Ký hiệu",
        flags: "Cờ",
        custom: "Tập quán",
      },
    },
  }),
  watch: {
    desciption: {
      deep: true,
      handler(val) {
        if (val) {
          $("#mota").append(val);
        }
      },
    },
    thongtin: {
      deep: true,
      handler(val) {
        this.info = val;
      },
    },
    chatprop: {
      deep: true,
      handler(val) {
        var chat = !val ? [] : JSON.parse(val);
        if (chat.length > 0) {
          this.chat = chat;
        }
      },
    },
  },
  mounted() {
    this.setUser();
  },
  methods: {
    onSendChat() {
      if (this.userchat) {
        this.chat.push({
          hoten: this.user.ho + " " + this.user.ten,
          ngaygio: new Date().toLocaleString(),
          message: this.userchat,
          picture: this.user.picture,
          children: [],
        });
        this.userchat = "";
        setTimeout(() => {
          this.chat[this.chat.length - 1].children.push({
            hoten: "Hệ thống LAZUDA",
            ngaygio: new Date().toLocaleString(),
            picture: "",
            message:
              "Câu hỏi của bạn đã được gửi đến nhân viên hệ thống lazuda.Vui lòng đợi...",
          });
          getApi(
            "/sendchat",
            {
              table: this.table,
              id: this.id,
              message: JSON.stringify(this.chat),
            },
            (result) => {
              console.log(result);
            }
          );
        }, 2000);
      }
    },
    toggleEmojiPicker() {
      this.showEmojiPicker = !this.showEmojiPicker;
    },
    addEmoji(emoji) {
      console.log(emoji);
      this.userchat += emoji.native;
    },
    setUser() {
      var user = JSON.parse(localStorage.getItem("user"))
        ? JSON.parse(localStorage.getItem("user"))
        : JSON.parse(sessionStorage.getItem("user"));
      console.log(user)
      if (user) {
        this.user = user;
      }
    },
  },
};
</script>

<style scoped lang="scss">
/deep/ #inputchat {
  width: 90%;
  float: left;
  font-size: 18px;
  height: 49px;
  color: black;
}
.chat2 {
  transform: translate(67px, 10px);
}
/deep/ #inputchat2 {
  width: 80%;
  float: left;
  font-size: 18px;
  height: 49px;
  color: black;
}
/deep/ .emoji-trigger {
  margin-left: 14px;
  top: 4px;
  cursor: pointer;
}
.emoji-mart {
  position: absolute;
  transform: translate(194%, -101%);
}
.sendmess {
  display: inline-block;
  margin-left: 20px;
  transform: translateY(-8px);
  i {
    font-size: 22px;
    transform: rotate(24deg);
    &:hover {
      cursor: pointer;
      color: #ff4500;
    }
  }
}
.thongtin {
  font-size: 14px;
  color: black;
}
.reply {
  // box-shadow: 0 6px 15px 0 rgba(36, 37, 38, 0.1);
  width: 90%;
  margin-left: 10%;
  background: #f4f4f6;
  li {
    list-style-type: none;
  }
}
tr:nth-child(even) {
  background-color: #bbbcb6;
  td {
    color: #333333 !important;
  }
}
tr:nth-child(odd) {
  background-color: transparent;
  td {
    color: black !important;
  }
}
/deep/ .pd-tab__desc .pd-table table {
  border: 1px solid gray;
}
/deep/ .pd-tab__desc,
.pd-tab__tag {
  max-width: unset;
}
/deep/ .review-o__text {
  color: black;
  font-size: 17px;
  margin-left: 80px;
}
/deep/ .review-o__date {
  font-size: 12px;
  display: inline-block;
  transform: translate(13px, -20px);
}
/deep/ .review-o__name {
  font-size: 16px;
  display: inline-block;
  transform: translate(13px, -20px);
}
/deep/ .rev-f1__review {
  max-width: 100%;
}
/deep/ .review-o:last-child {
  border-bottom: unset;
  transition: all 0.3s linear;
  animation: fade 0.3s linear 100ms;
}
@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
/deep/ .pd-tab__desc .pd-table {
  width: 660px;
}
/deep/ .ques {
  font-size: 18px;
}
/deep/ .putques {
}
.review-o__info {
  img {
    border-radius: 50%;
    width: 6%;
    // margin-top: -50px;
    // transform: translate(41px, 15px);
    border: 2px solid gray;
  }
}
</style>