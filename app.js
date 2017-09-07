import polyfill from 'assets/plugins/polyfill'
import WxValidate from 'helpers/WxValidate'
import HttpResource from 'helpers/HttpResource'
import HttpService from 'helpers/HttpService'
import WxService from 'helpers/WxService'
import Tools from 'helpers/Tools'
import Config from 'etc/config'
import Utils from 'utils/util'

App({
  globalData: {
    userInfo: null,
    coachInfo: {
      "nickName": '刘教练', 
      "description": '13年教学经验，不止于用心！', 
      "phone": "15927115522",
      "avatar": 'http://little7-1252484566.cosgz.myqcloud.com/mini-program/zm-logo-420.png'
      },
    events: []
  },
  onLaunch() {
    require('./assets/plugins/sdk-v1.1.0b')
    wx.BaaS.init(Config.cloud_minapp)

    this.jsonResource = this.HttpResource('/:id', {id: '@id'})
  },
  onShow() {
    var self = this
    this.refreshJsonData(function () {
      console.log('refreshJsonData success...')
    })
  },
  onHide() {
    console.log('onHide')
  },
  refreshJsonData(cb) {
    var self = this

    let ProductStar = new wx.BaaS.TableObject(Config.star_table_id)
    ProductStar.get(Config.star_record_id).then((res) => {
      self.globalData.coachInfo = {
        'nickName':res.data.nick_name,
        'description':res.data.description,
        'phone':res.data.mobile_phone,
        'avatar':res.data.avatar,
        }

      let ProductEvents = new wx.BaaS.TableObject(Config.events_table_id)
      let query = new wx.BaaS.Query()

      ProductEvents.setQuery(query).limit(50).offset(0).find().then((res) => {
        self.globalData.events = res.data.objects.map(function (item) {
          item.phone = item.mobile_phone
          item.author = {
            'avatar_url': item.avatar_url,
            'loginname': item.username
          }
          return item;
        }).reverse()

        if (cb) {
          cb()
        }
      }, (err) => {
        // err
      })
    }, (err) => {
      // err
    })
  },
  updateJsonFile(event, cb) {
    var self = this
    event.last_reply_at = Utils.formatDate(new Date())
    event.author = {
      'avatar_url': event.avatar_url,
      'loginname': event.loginname
    }
    event.content = event.content || ''
    event.phone = event.phone || ''
    console.log(event)

    let data = {
      "type": event.type,
      "content": event.content,
      "mobile_phone": event.phone,
      "avatar_url": event.avatar_url,
      "username": event.loginname,
      "title": event.title,
      "last_reply_at": event.last_reply_at
    }
    let objects = { 
      'tableID': Config.events_table_id, 
      data
    }
    wx.BaaS.createRecord(objects).then((res) => {
      // success
      console.log(res)
      this.refreshJsonData(cb)
    }, (err) => {
      // err
    })
  },
  renderImage(path) {
    if (!path) return ''
    if (path.indexOf('http') !== -1) return path
    return `${this.Config.fileBasePath}${path}`
  },
  WxValidate: (rules, messages) => new WxValidate(rules, messages),
  HttpResource: (url, paramDefaults, actions, options) => new HttpResource(url, paramDefaults, actions, options).init(),
  HttpService: new HttpService,
  WxService: new WxService,
  Tools: new Tools,
  Config: Config,
})