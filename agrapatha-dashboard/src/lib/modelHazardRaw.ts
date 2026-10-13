// AUTO-GENERATED FROM model_hazard.h (100-Tree Random Forest Classifier)
// Input feature order: [temp, RH, wind, rain, FFMC, DMC]
// Output class order: [High, Low, Moderate] (Alphabetical LabelEncoder order)

export type HazardVector = [number, number, number];

function addVec(v1: HazardVector, v2: HazardVector): HazardVector {
  return [v1[0] + v2[0], v1[1] + v2[1], v1[2] + v2[2]];
}

export function scoreModelHazard(input: [number, number, number, number, number, number] | number[]): HazardVector {
  let var0: HazardVector = [0, 0, 0];
  let var1: HazardVector = [0, 0, 0];
  let var2: HazardVector = [0, 0, 0];
  let var3: HazardVector = [0, 0, 0];
  let var4: HazardVector = [0, 0, 0];
  let var5: HazardVector = [0, 0, 0];
  let var6: HazardVector = [0, 0, 0];
  let var7: HazardVector = [0, 0, 0];
  let var8: HazardVector = [0, 0, 0];
  let var9: HazardVector = [0, 0, 0];
  let var10: HazardVector = [0, 0, 0];
  let var11: HazardVector = [0, 0, 0];
  let var12: HazardVector = [0, 0, 0];
  let var13: HazardVector = [0, 0, 0];
  let var14: HazardVector = [0, 0, 0];
  let var15: HazardVector = [0, 0, 0];
  let var16: HazardVector = [0, 0, 0];
  let var17: HazardVector = [0, 0, 0];
  let var18: HazardVector = [0, 0, 0];
  let var19: HazardVector = [0, 0, 0];
  let var20: HazardVector = [0, 0, 0];
  let var21: HazardVector = [0, 0, 0];
  let var22: HazardVector = [0, 0, 0];
  let var23: HazardVector = [0, 0, 0];
  let var24: HazardVector = [0, 0, 0];
  let var25: HazardVector = [0, 0, 0];
  let var26: HazardVector = [0, 0, 0];
  let var27: HazardVector = [0, 0, 0];
  let var28: HazardVector = [0, 0, 0];
  let var29: HazardVector = [0, 0, 0];
  let var30: HazardVector = [0, 0, 0];
  let var31: HazardVector = [0, 0, 0];
  let var32: HazardVector = [0, 0, 0];
  let var33: HazardVector = [0, 0, 0];
  let var34: HazardVector = [0, 0, 0];
  let var35: HazardVector = [0, 0, 0];
  let var36: HazardVector = [0, 0, 0];
  let var37: HazardVector = [0, 0, 0];
  let var38: HazardVector = [0, 0, 0];
  let var39: HazardVector = [0, 0, 0];
  let var40: HazardVector = [0, 0, 0];
  let var41: HazardVector = [0, 0, 0];
  let var42: HazardVector = [0, 0, 0];
  let var43: HazardVector = [0, 0, 0];
  let var44: HazardVector = [0, 0, 0];
  let var45: HazardVector = [0, 0, 0];
  let var46: HazardVector = [0, 0, 0];
  let var47: HazardVector = [0, 0, 0];
  let var48: HazardVector = [0, 0, 0];
  let var49: HazardVector = [0, 0, 0];
  let var50: HazardVector = [0, 0, 0];
  let var51: HazardVector = [0, 0, 0];
  let var52: HazardVector = [0, 0, 0];
  let var53: HazardVector = [0, 0, 0];
  let var54: HazardVector = [0, 0, 0];
  let var55: HazardVector = [0, 0, 0];
  let var56: HazardVector = [0, 0, 0];
  let var57: HazardVector = [0, 0, 0];
  let var58: HazardVector = [0, 0, 0];
  let var59: HazardVector = [0, 0, 0];
  let var60: HazardVector = [0, 0, 0];
  let var61: HazardVector = [0, 0, 0];
  let var62: HazardVector = [0, 0, 0];
  let var63: HazardVector = [0, 0, 0];
  let var64: HazardVector = [0, 0, 0];
  let var65: HazardVector = [0, 0, 0];
  let var66: HazardVector = [0, 0, 0];
  let var67: HazardVector = [0, 0, 0];
  let var68: HazardVector = [0, 0, 0];
  let var69: HazardVector = [0, 0, 0];
  let var70: HazardVector = [0, 0, 0];
  let var71: HazardVector = [0, 0, 0];
  let var72: HazardVector = [0, 0, 0];
  let var73: HazardVector = [0, 0, 0];
  let var74: HazardVector = [0, 0, 0];
  let var75: HazardVector = [0, 0, 0];
  let var76: HazardVector = [0, 0, 0];
  let var77: HazardVector = [0, 0, 0];
  let var78: HazardVector = [0, 0, 0];
  let var79: HazardVector = [0, 0, 0];
  let var80: HazardVector = [0, 0, 0];
  let var81: HazardVector = [0, 0, 0];
  let var82: HazardVector = [0, 0, 0];
  let var83: HazardVector = [0, 0, 0];
  let var84: HazardVector = [0, 0, 0];
  let var85: HazardVector = [0, 0, 0];
  let var86: HazardVector = [0, 0, 0];
  let var87: HazardVector = [0, 0, 0];
  let var88: HazardVector = [0, 0, 0];
  let var89: HazardVector = [0, 0, 0];
  let var90: HazardVector = [0, 0, 0];
  let var91: HazardVector = [0, 0, 0];
  let var92: HazardVector = [0, 0, 0];
  let var93: HazardVector = [0, 0, 0];
  let var94: HazardVector = [0, 0, 0];
  let var95: HazardVector = [0, 0, 0];
  let var96: HazardVector = [0, 0, 0];
  let var97: HazardVector = [0, 0, 0];
  let var98: HazardVector = [0, 0, 0];
  let var99: HazardVector = [0, 0, 0];
  let var100: HazardVector = [0, 0, 0];
  if (input[1] <= 66.5) {
      if (input[4] <= 85.68462371826172) {
          if (input[4] <= 84.13443374633789) {
              if (input[0] <= 5.18758487701416) {
                  if (input[4] <= 83.1619644165039) {
                      var100 = [0.0, 1.0, 0.0];
                  } else {
                      var100 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var100 = [0.0, 1.0, 0.0];
              }
          } else {
              if (input[5] <= 26.550000190734863) {
                  if (input[1] <= 50.5) {
                      if (input[2] <= 7.393275499343872) {
                          var100 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[5] <= 15.303080558776855) {
                              var100 = [0.0, 0.0, 1.0];
                          } else {
                              var100 = [0.0, 1.0, 0.0];
                          }
                      }
                  } else {
                      if (input[5] <= 14.572833061218262) {
                          var100 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[2] <= 3.8625799417495728) {
                              var100 = [0.0, 0.0, 1.0];
                          } else {
                              var100 = [0.0, 1.0, 0.0];
                          }
                      }
                  }
              } else {
                  var100 = [0.0, 0.0, 1.0];
              }
          }
      } else {
          if (input[5] <= 129.8000030517578) {
              if (input[4] <= 92.0) {
                  if (input[0] <= 24.049999237060547) {
                      if (input[2] <= 4.844913005828857) {
                          if (input[2] <= 3.978654384613037) {
                              if (input[4] <= 91.09317016601562) {
                                  var100 = [0.044444444444444446, 0.0, 0.9555555555555556];
                              } else {
                                  var100 = [0.2926829268292683, 0.0, 0.7073170731707317];
                              }
                          } else {
                              if (input[2] <= 4.02163290977478) {
                                  var100 = [0.4, 0.0, 0.6];
                              } else {
                                  var100 = [0.13636363636363635, 0.0, 0.8636363636363636];
                              }
                          }
                      } else {
                          if (input[4] <= 89.89022445678711) {
                              if (input[1] <= 49.0) {
                                  var100 = [0.09090909090909091, 0.0, 0.9090909090909091];
                              } else {
                                  var100 = [0.0, 0.5, 0.5];
                              }
                          } else {
                              if (input[5] <= 108.20000076293945) {
                                  var100 = [1.0, 0.0, 0.0];
                              } else {
                                  var100 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  } else {
                      if (input[0] <= 24.550000190734863) {
                          var100 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[0] <= 24.699999809265137) {
                              var100 = [0.0, 0.0, 1.0];
                          } else {
                              var100 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  var100 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[1] <= 45.0) {
                  if (input[2] <= 3.799999952316284) {
                      if (input[5] <= 247.10000610351562) {
                          if (input[5] <= 141.75) {
                              if (input[1] <= 38.0) {
                                  var100 = [1.0, 0.0, 0.0];
                              } else {
                                  var100 = [0.5, 0.0, 0.5];
                              }
                          } else {
                              var100 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var100 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var100 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[2] <= 3.475687861442566) {
                      if (input[4] <= 91.70000076293945) {
                          var100 = [0.0, 0.0, 1.0];
                      } else {
                          var100 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[4] <= 90.71674346923828) {
                          if (input[5] <= 142.12287139892578) {
                              var100 = [0.0, 0.0, 1.0];
                          } else {
                              var100 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var100 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      }
  } else {
      if (input[2] <= 7.13644552230835) {
          if (input[4] <= 84.14999771118164) {
              if (input[4] <= 81.9007339477539) {
                  var100 = [0.0, 1.0, 0.0];
              } else {
                  if (input[5] <= 3.382325053215027) {
                      var100 = [0.0, 0.0, 1.0];
                  } else {
                      var100 = [0.0, 1.0, 0.0];
                  }
              }
          } else {
              if (input[5] <= 123.79393768310547) {
                  if (input[4] <= 91.32926559448242) {
                      if (input[4] <= 84.52616119384766) {
                          var100 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[2] <= 5.6000001430511475) {
                              var100 = [0.0, 0.0, 1.0];
                          } else {
                              var100 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      var100 = [1.0, 0.0, 0.0];
                  }
              } else {
                  var100 = [1.0, 0.0, 0.0];
              }
          }
      } else {
          var100 = [1.0, 0.0, 0.0];
      }
  }
  let var101: HazardVector = [0, 0, 0];
  if (input[5] <= 72.0999984741211) {
      if (input[4] <= 84.66106796264648) {
          if (input[4] <= 84.16878128051758) {
              if (input[4] <= 81.88681030273438) {
                  var101 = [0.0, 1.0, 0.0];
              } else {
                  if (input[5] <= 3.382325053215027) {
                      var101 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[0] <= 5.178961753845215) {
                          if (input[0] <= 5.064863920211792) {
                              var101 = [0.0, 1.0, 0.0];
                          } else {
                              var101 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[1] <= 73.0) {
                              var101 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[5] <= 4.416137456893921) {
                                  var101 = [0.0, 1.0, 0.0];
                              } else {
                                  var101 = [0.0, 0.5, 0.5];
                              }
                          }
                      }
                  }
              }
          } else {
              if (input[5] <= 7.4652628898620605) {
                  if (input[2] <= 6.083466291427612) {
                      var101 = [1.0, 0.0, 0.0];
                  } else {
                      var101 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[5] <= 26.800000190734863) {
                      var101 = [0.0, 1.0, 0.0];
                  } else {
                      var101 = [0.0, 0.0, 1.0];
                  }
              }
          }
      } else {
          if (input[2] <= 8.015865802764893) {
              if (input[1] <= 27.5) {
                  if (input[0] <= 17.479836463928223) {
                      if (input[4] <= 90.64999771118164) {
                          var101 = [0.0, 0.0, 1.0];
                      } else {
                          var101 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[4] <= 91.14999771118164) {
                          var101 = [0.0, 0.0, 1.0];
                      } else {
                          var101 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[4] <= 89.0540885925293) {
                      if (input[4] <= 84.71833419799805) {
                          if (input[5] <= 26.28181552886963) {
                              if (input[1] <= 65.5) {
                                  var101 = [0.0, 1.0, 0.0];
                              } else {
                                  var101 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var101 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[2] <= 5.9948625564575195) {
                              if (input[0] <= 10.25196123123169) {
                                  var101 = [0.0625, 0.0625, 0.875];
                              } else {
                                  var101 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[0] <= 10.434550285339355) {
                                  var101 = [0.0, 0.0, 1.0];
                              } else {
                                  var101 = [0.0, 1.0, 0.0];
                              }
                          }
                      }
                  } else {
                      if (input[4] <= 91.54999923706055) {
                          if (input[1] <= 47.0) {
                              if (input[0] <= 12.440937519073486) {
                                  var101 = [1.0, 0.0, 0.0];
                              } else {
                                  var101 = [0.07692307692307693, 0.0, 0.9230769230769231];
                              }
                          } else {
                              var101 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var101 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[1] <= 26.5) {
                  var101 = [0.0, 1.0, 0.0];
              } else {
                  if (input[0] <= 10.911481857299805) {
                      var101 = [0.0, 0.0, 1.0];
                  } else {
                      var101 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  } else {
      if (input[2] <= 3.959672212600708) {
          if (input[0] <= 23.899999618530273) {
              if (input[1] <= 30.5) {
                  if (input[5] <= 111.0999984741211) {
                      var101 = [0.0, 0.0, 1.0];
                  } else {
                      var101 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[4] <= 91.78664779663086) {
                      if (input[0] <= 14.818799018859863) {
                          if (input[0] <= 13.799999713897705) {
                              var101 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[1] <= 49.5) {
                                  var101 = [0.0, 0.0, 1.0];
                              } else {
                                  var101 = [0.8333333333333334, 0.0, 0.16666666666666666];
                              }
                          }
                      } else {
                          if (input[5] <= 91.2944107055664) {
                              var101 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[0] <= 22.06873893737793) {
                                  var101 = [0.03614457831325301, 0.0, 0.963855421686747];
                              } else {
                                  var101 = [0.16666666666666666, 0.0, 0.8333333333333334];
                              }
                          }
                      }
                  } else {
                      if (input[1] <= 48.5) {
                          var101 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[0] <= 17.409615516662598) {
                              if (input[1] <= 53.0) {
                                  var101 = [0.0, 0.0, 1.0];
                              } else {
                                  var101 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var101 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          } else {
              if (input[2] <= 3.3499999046325684) {
                  var101 = [1.0, 0.0, 0.0];
              } else {
                  if (input[5] <= 247.10000610351562) {
                      var101 = [1.0, 0.0, 0.0];
                  } else {
                      var101 = [0.0, 0.0, 1.0];
                  }
              }
          }
      } else {
          if (input[1] <= 41.5) {
              var101 = [1.0, 0.0, 0.0];
          } else {
              if (input[2] <= 4.032249927520752) {
                  if (input[4] <= 88.5999984741211) {
                      var101 = [0.0, 0.0, 1.0];
                  } else {
                      var101 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[5] <= 138.17286682128906) {
                      if (input[2] <= 4.45613956451416) {
                          var101 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[0] <= 16.0) {
                              if (input[5] <= 114.05060577392578) {
                                  var101 = [0.8, 0.0, 0.2];
                              } else {
                                  var101 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[5] <= 102.60000228881836) {
                                  var101 = [1.0, 0.0, 0.0];
                              } else {
                                  var101 = [0.45454545454545453, 0.0, 0.5454545454545454];
                              }
                          }
                      }
                  } else {
                      var101 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  }
  var99 = addVec(var100, var101);
  let var102: HazardVector = [0, 0, 0];
  if (input[4] <= 85.68462371826172) {
      if (input[4] <= 84.39938735961914) {
          if (input[5] <= 3.381048560142517) {
              if (input[5] <= 2.8674663305282593) {
                  var102 = [0.0, 1.0, 0.0];
              } else {
                  var102 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[1] <= 73.5) {
                  if (input[0] <= 5.1041319370269775) {
                      if (input[2] <= 5.737994313240051) {
                          var102 = [0.0, 1.0, 0.0];
                      } else {
                          var102 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var102 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[0] <= 11.778302192687988) {
                      if (input[5] <= 6.0640153884887695) {
                          var102 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[0] <= 7.772817134857178) {
                              var102 = [1.0, 0.0, 0.0];
                          } else {
                              var102 = [0.0, 1.0, 0.0];
                          }
                      }
                  } else {
                      if (input[0] <= 12.052922248840332) {
                          var102 = [0.0, 0.0, 1.0];
                      } else {
                          var102 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          }
      } else {
          if (input[5] <= 26.550000190734863) {
              if (input[1] <= 50.5) {
                  var102 = [0.0, 1.0, 0.0];
              } else {
                  if (input[0] <= 6.528637886047363) {
                      if (input[1] <= 65.0) {
                          if (input[4] <= 84.97222900390625) {
                              var102 = [0.0, 1.0, 0.0];
                          } else {
                              var102 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var102 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[1] <= 52.5) {
                          if (input[5] <= 10.93480658531189) {
                              var102 = [0.0, 0.0, 1.0];
                          } else {
                              var102 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          var102 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          } else {
              var102 = [0.0, 0.0, 1.0];
          }
      }
  } else {
      if (input[4] <= 91.78664779663086) {
          if (input[2] <= 4.832783460617065) {
              if (input[4] <= 91.08585739135742) {
                  if (input[1] <= 77.0) {
                      if (input[0] <= 24.299999237060547) {
                          if (input[1] <= 72.5) {
                              if (input[1] <= 63.5) {
                                  var102 = [0.0, 0.0, 1.0];
                              } else {
                                  var102 = [0.08333333333333333, 0.0, 0.9166666666666666];
                              }
                          } else {
                              if (input[2] <= 3.149999976158142) {
                                  var102 = [1.0, 0.0, 0.0];
                              } else {
                                  var102 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[4] <= 89.5) {
                              var102 = [0.0, 0.0, 1.0];
                          } else {
                              var102 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      var102 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[5] <= 104.31684494018555) {
                      if (input[1] <= 30.5) {
                          var102 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[0] <= 23.65000057220459) {
                              if (input[1] <= 42.0) {
                                  var102 = [0.0, 0.0, 1.0];
                              } else {
                                  var102 = [0.8571428571428571, 0.0, 0.14285714285714285];
                              }
                          } else {
                              var102 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[4] <= 91.15571594238281) {
                          var102 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[1] <= 39.0) {
                              if (input[5] <= 117.26684951782227) {
                                  var102 = [0.0, 0.0, 1.0];
                              } else {
                                  var102 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[2] <= 4.358978986740112) {
                                  var102 = [0.06976744186046512, 0.0, 0.9302325581395349];
                              } else {
                                  var102 = [0.5, 0.0, 0.5];
                              }
                          }
                      }
                  }
              }
          } else {
              if (input[4] <= 90.42288208007812) {
                  if (input[4] <= 88.47683715820312) {
                      var102 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[1] <= 58.0) {
                          if (input[0] <= 16.850000381469727) {
                              var102 = [1.0, 0.0, 0.0];
                          } else {
                              var102 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[5] <= 116.92287063598633) {
                              var102 = [1.0, 0.0, 0.0];
                          } else {
                              var102 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  if (input[1] <= 58.0) {
                      if (input[2] <= 5.6000001430511475) {
                          if (input[0] <= 17.5) {
                              var102 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[4] <= 91.5) {
                                  var102 = [1.0, 0.0, 0.0];
                              } else {
                                  var102 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          var102 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[0] <= 13.726375102996826) {
                          if (input[1] <= 64.5) {
                              var102 = [0.0, 0.0, 1.0];
                          } else {
                              var102 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[1] <= 59.5) {
                              var102 = [0.0, 0.0, 1.0];
                          } else {
                              var102 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          }
      } else {
          if (input[1] <= 44.5) {
              var102 = [1.0, 0.0, 0.0];
          } else {
              if (input[4] <= 91.95000076293945) {
                  if (input[4] <= 91.82258605957031) {
                      var102 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[1] <= 54.5) {
                          var102 = [0.0, 0.0, 1.0];
                      } else {
                          var102 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  var102 = [1.0, 0.0, 0.0];
              }
          }
      }
  }
  var98 = addVec(var99, var102);
  let var103: HazardVector = [0, 0, 0];
  if (input[5] <= 72.0999984741211) {
      if (input[0] <= 6.659921646118164) {
          if (input[2] <= 3.67633056640625) {
              var103 = [0.0, 1.0, 0.0];
          } else {
              if (input[2] <= 4.598527431488037) {
                  if (input[4] <= 84.56736373901367) {
                      var103 = [0.0, 1.0, 0.0];
                  } else {
                      var103 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[0] <= 4.566897630691528) {
                      var103 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[2] <= 7.796332597732544) {
                          var103 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[5] <= 26.300000190734863) {
                              var103 = [0.0, 1.0, 0.0];
                          } else {
                              var103 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              }
          }
      } else {
          if (input[5] <= 10.212213039398193) {
              if (input[2] <= 6.292224645614624) {
                  if (input[2] <= 1.8503767251968384) {
                      if (input[4] <= 84.4594955444336) {
                          if (input[2] <= 1.8437422513961792) {
                              var103 = [0.0, 1.0, 0.0];
                          } else {
                              var103 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var103 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[1] <= 76.5) {
                          if (input[5] <= 6.615220308303833) {
                              if (input[2] <= 3.314686894416809) {
                                  var103 = [0.0, 0.5, 0.5];
                              } else {
                                  var103 = [0.0, 1.0, 0.0];
                              }
                          } else {
                              var103 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          var103 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  var103 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[0] <= 20.770597457885742) {
                  if (input[5] <= 54.379634857177734) {
                      if (input[4] <= 84.79733657836914) {
                          if (input[2] <= 6.631026029586792) {
                              var103 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[4] <= 84.63900375366211) {
                                  var103 = [0.0, 0.0, 1.0];
                              } else {
                                  var103 = [0.0, 1.0, 0.0];
                              }
                          }
                      } else {
                          if (input[2] <= 7.799999952316284) {
                              if (input[2] <= 3.5543198585510254) {
                                  var103 = [0.1, 0.0, 0.9];
                              } else {
                                  var103 = [0.31746031746031744, 0.031746031746031744, 0.6507936507936508];
                              }
                          } else {
                              var103 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      var103 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[4] <= 85.8499984741211) {
                      var103 = [0.0, 1.0, 0.0];
                  } else {
                      var103 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  } else {
      if (input[2] <= 3.935486674308777) {
          if (input[4] <= 91.75) {
              if (input[2] <= 1.0999999642372131) {
                  var103 = [1.0, 0.0, 0.0];
              } else {
                  if (input[5] <= 129.8000030517578) {
                      if (input[0] <= 14.818799018859863) {
                          if (input[2] <= 2.25) {
                              if (input[0] <= 13.350460529327393) {
                                  var103 = [0.0, 0.0, 1.0];
                              } else {
                                  var103 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[4] <= 90.5) {
                                  var103 = [1.0, 0.0, 0.0];
                              } else {
                                  var103 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[4] <= 91.09317016601562) {
                              var103 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[1] <= 45.5) {
                                  var103 = [0.05, 0.0, 0.95];
                              } else {
                                  var103 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      if (input[4] <= 90.91413116455078) {
                          var103 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[2] <= 3.3499999046325684) {
                              if (input[2] <= 2.2618844509124756) {
                                  var103 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              } else {
                                  var103 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var103 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          } else {
              if (input[4] <= 91.95000076293945) {
                  if (input[0] <= 17.909615516662598) {
                      var103 = [0.0, 0.0, 1.0];
                  } else {
                      var103 = [1.0, 0.0, 0.0];
                  }
              } else {
                  var103 = [1.0, 0.0, 0.0];
              }
          }
      } else {
          if (input[1] <= 41.5) {
              var103 = [1.0, 0.0, 0.0];
          } else {
              if (input[5] <= 85.0576286315918) {
                  var103 = [0.0, 0.0, 1.0];
              } else {
                  if (input[4] <= 91.79999923706055) {
                      if (input[5] <= 139.67286682128906) {
                          if (input[4] <= 91.39999771118164) {
                              if (input[2] <= 4.964880466461182) {
                                  var103 = [1.0, 0.0, 0.0];
                              } else {
                                  var103 = [0.5625, 0.0, 0.4375];
                              }
                          } else {
                              var103 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var103 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var103 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  }
  var97 = addVec(var98, var103);
  let var104: HazardVector = [0, 0, 0];
  if (input[5] <= 72.0999984741211) {
      if (input[2] <= 3.106247663497925) {
          if (input[0] <= 8.774475574493408) {
              var104 = [0.0, 1.0, 0.0];
          } else {
              if (input[5] <= 53.562095642089844) {
                  if (input[2] <= 0.9216743409633636) {
                      var104 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[0] <= 12.541208744049072) {
                          if (input[5] <= 6.3998332023620605) {
                              if (input[0] <= 10.69184398651123) {
                                  var104 = [0.0, 1.0, 0.0];
                              } else {
                                  var104 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var104 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[5] <= 12.033965110778809) {
                              if (input[5] <= 5.075709819793701) {
                                  var104 = [0.0, 0.0, 1.0];
                              } else {
                                  var104 = [0.0, 0.8421052631578947, 0.15789473684210525];
                              }
                          } else {
                              if (input[2] <= 3.022278666496277) {
                                  var104 = [0.0, 0.2608695652173913, 0.7391304347826086];
                              } else {
                                  var104 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[1] <= 36.5) {
                      if (input[2] <= 3.0837302207946777) {
                          var104 = [0.0, 1.0, 0.0];
                      } else {
                          var104 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var104 = [0.0, 1.0, 0.0];
                  }
              }
          }
      } else {
          if (input[1] <= 46.5) {
              if (input[5] <= 25.550000190734863) {
                  if (input[5] <= 5.570770025253296) {
                      if (input[4] <= 83.36552047729492) {
                          var104 = [0.0, 1.0, 0.0];
                      } else {
                          var104 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[0] <= 15.123886108398438) {
                          if (input[4] <= 88.20000076293945) {
                              var104 = [0.0, 1.0, 0.0];
                          } else {
                              var104 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[1] <= 33.5) {
                              var104 = [1.0, 0.0, 0.0];
                          } else {
                              var104 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  if (input[2] <= 3.4093443155288696) {
                      var104 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[0] <= 19.320716857910156) {
                          if (input[4] <= 91.54999923706055) {
                              if (input[5] <= 40.02165412902832) {
                                  var104 = [0.0, 0.0, 1.0];
                              } else {
                                  var104 = [0.18181818181818182, 0.13636363636363635, 0.6818181818181818];
                              }
                          } else {
                              var104 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[1] <= 32.0) {
                              var104 = [0.0, 1.0, 0.0];
                          } else {
                              var104 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          } else {
              if (input[0] <= 4.580510377883911) {
                  var104 = [0.0, 0.0, 1.0];
              } else {
                  if (input[1] <= 85.5) {
                      if (input[0] <= 8.592745780944824) {
                          if (input[2] <= 7.026859998703003) {
                              if (input[4] <= 84.80052947998047) {
                                  var104 = [0.0, 1.0, 0.0];
                              } else {
                                  var104 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var104 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[0] <= 8.772817134857178) {
                              var104 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[2] <= 5.423826217651367) {
                                  var104 = [0.14285714285714285, 0.8571428571428571, 0.0];
                              } else {
                                  var104 = [0.0, 1.0, 0.0];
                              }
                          }
                      }
                  } else {
                      if (input[0] <= 9.242175579071045) {
                          var104 = [1.0, 0.0, 0.0];
                      } else {
                          var104 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          }
      }
  } else {
      if (input[2] <= 3.959672212600708) {
          if (input[1] <= 30.5) {
              if (input[5] <= 235.0500030517578) {
                  if (input[4] <= 90.9568977355957) {
                      var104 = [0.0, 0.0, 1.0];
                  } else {
                      var104 = [1.0, 0.0, 0.0];
                  }
              } else {
                  var104 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[4] <= 91.95000076293945) {
                  if (input[2] <= 1.0999999642372131) {
                      var104 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[0] <= 11.400460720062256) {
                          var104 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[2] <= 1.818620502948761) {
                              if (input[4] <= 91.29317092895508) {
                                  var104 = [0.0, 0.0, 1.0];
                              } else {
                                  var104 = [0.8333333333333334, 0.0, 0.16666666666666666];
                              }
                          } else {
                              if (input[4] <= 91.091796875) {
                                  var104 = [0.05, 0.0, 0.95];
                              } else {
                                  var104 = [0.25, 0.0, 0.75];
                              }
                          }
                      }
                  }
              } else {
                  var104 = [1.0, 0.0, 0.0];
              }
          }
      } else {
          if (input[1] <= 41.5) {
              var104 = [1.0, 0.0, 0.0];
          } else {
              if (input[5] <= 138.17286682128906) {
                  if (input[1] <= 50.5) {
                      if (input[4] <= 91.89999771118164) {
                          if (input[2] <= 4.032249927520752) {
                              var104 = [1.0, 0.0, 0.0];
                          } else {
                              var104 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var104 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[4] <= 91.75) {
                          if (input[2] <= 6.810921907424927) {
                              if (input[5] <= 88.40763092041016) {
                                  var104 = [0.0, 0.0, 1.0];
                              } else {
                                  var104 = [0.3333333333333333, 0.0, 0.6666666666666666];
                              }
                          } else {
                              var104 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var104 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  var104 = [1.0, 0.0, 0.0];
              }
          }
      }
  }
  var96 = addVec(var97, var104);
  let var105: HazardVector = [0, 0, 0];
  if (input[1] <= 66.5) {
      if (input[5] <= 25.67666721343994) {
          if (input[2] <= 3.1259902715682983) {
              if (input[4] <= 85.13850402832031) {
                  var105 = [0.0, 1.0, 0.0];
              } else {
                  var105 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[0] <= 15.11476993560791) {
                  if (input[1] <= 32.5) {
                      var105 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[4] <= 85.92582321166992) {
                          if (input[5] <= 3.877484917640686) {
                              var105 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[0] <= 7.86251425743103) {
                                  var105 = [0.0, 0.9565217391304348, 0.043478260869565216];
                              } else {
                                  var105 = [0.0, 1.0, 0.0];
                              }
                          }
                      } else {
                          if (input[2] <= 5.2750091552734375) {
                              var105 = [0.0, 0.0, 1.0];
                          } else {
                              var105 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  if (input[5] <= 8.591503262519836) {
                      var105 = [0.0, 1.0, 0.0];
                  } else {
                      var105 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[5] <= 129.8000030517578) {
              if (input[4] <= 92.0) {
                  if (input[4] <= 84.08902740478516) {
                      var105 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[0] <= 17.46861743927002) {
                          if (input[4] <= 91.0999984741211) {
                              if (input[1] <= 52.0) {
                                  var105 = [0.044444444444444446, 0.0, 0.9555555555555556];
                              } else {
                                  var105 = [0.30303030303030304, 0.06060606060606061, 0.6363636363636364];
                              }
                          } else {
                              if (input[2] <= 3.799999952316284) {
                                  var105 = [0.0, 0.0, 1.0];
                              } else {
                                  var105 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[4] <= 91.091796875) {
                              if (input[2] <= 4.6233930587768555) {
                                  var105 = [0.0, 0.0, 1.0];
                              } else {
                                  var105 = [0.3333333333333333, 0.0, 0.6666666666666666];
                              }
                          } else {
                              if (input[4] <= 91.20931243896484) {
                                  var105 = [0.8571428571428571, 0.0, 0.14285714285714285];
                              } else {
                                  var105 = [0.1891891891891892, 0.0, 0.8108108108108109];
                              }
                          }
                      }
                  }
              } else {
                  var105 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[5] <= 243.29999542236328) {
                  if (input[4] <= 91.0808334350586) {
                      if (input[1] <= 64.5) {
                          var105 = [0.0, 0.0, 1.0];
                      } else {
                          var105 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[4] <= 91.64999771118164) {
                          if (input[5] <= 139.60000610351562) {
                              if (input[5] <= 136.4000015258789) {
                                  var105 = [1.0, 0.0, 0.0];
                              } else {
                                  var105 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var105 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var105 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[5] <= 279.8999938964844) {
                      var105 = [0.0, 0.0, 1.0];
                  } else {
                      var105 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  } else {
      if (input[5] <= 75.34341049194336) {
          if (input[4] <= 84.1406021118164) {
              if (input[5] <= 3.40263569355011) {
                  if (input[2] <= 1.3499999642372131) {
                      var105 = [0.0, 1.0, 0.0];
                  } else {
                      var105 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[4] <= 82.52257919311523) {
                      var105 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[2] <= 2.7718214988708496) {
                          var105 = [0.0, 1.0, 0.0];
                      } else {
                          var105 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          } else {
              if (input[0] <= 9.242175579071045) {
                  var105 = [1.0, 0.0, 0.0];
              } else {
                  if (input[5] <= 37.95000076293945) {
                      var105 = [0.0, 0.0, 1.0];
                  } else {
                      var105 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[0] <= 14.75) {
              if (input[1] <= 77.5) {
                  if (input[4] <= 89.16718673706055) {
                      var105 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[0] <= 14.449999809265137) {
                          var105 = [1.0, 0.0, 0.0];
                      } else {
                          var105 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  if (input[2] <= 4.25) {
                      var105 = [0.0, 0.0, 1.0];
                  } else {
                      var105 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              var105 = [1.0, 0.0, 0.0];
          }
      }
  }
  var95 = addVec(var96, var105);
  let var106: HazardVector = [0, 0, 0];
  if (input[4] <= 85.73360061645508) {
      if (input[4] <= 84.6109504699707) {
          if (input[0] <= 4.566897630691528) {
              var106 = [0.0, 0.0, 1.0];
          } else {
              if (input[5] <= 72.20000076293945) {
                  if (input[2] <= 7.796332597732544) {
                      if (input[2] <= 1.86801016330719) {
                          if (input[0] <= 13.02065896987915) {
                              var106 = [0.0, 1.0, 0.0];
                          } else {
                              var106 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[5] <= 6.800569295883179) {
                              if (input[5] <= 6.776819944381714) {
                                  var106 = [0.0, 1.0, 0.0];
                              } else {
                                  var106 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var106 = [0.0, 1.0, 0.0];
                          }
                      }
                  } else {
                      var106 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var106 = [0.0, 0.0, 1.0];
              }
          }
      } else {
          if (input[1] <= 50.5) {
              if (input[2] <= 5.536707401275635) {
                  if (input[4] <= 84.87357711791992) {
                      var106 = [0.0, 1.0, 0.0];
                  } else {
                      var106 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[5] <= 11.16991639137268) {
                      var106 = [0.0, 0.0, 1.0];
                  } else {
                      var106 = [0.0, 1.0, 0.0];
                  }
              }
          } else {
              if (input[2] <= 5.013831853866577) {
                  var106 = [0.0, 0.0, 1.0];
              } else {
                  if (input[4] <= 84.78294372558594) {
                      var106 = [0.0, 0.0, 1.0];
                  } else {
                      var106 = [0.0, 1.0, 0.0];
                  }
              }
          }
      }
  } else {
      if (input[4] <= 91.78664779663086) {
          if (input[4] <= 91.091796875) {
              if (input[0] <= 15.233121395111084) {
                  if (input[2] <= 5.7493040561676025) {
                      if (input[4] <= 88.55000305175781) {
                          var106 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[4] <= 90.28228759765625) {
                              if (input[1] <= 46.5) {
                                  var106 = [0.0, 0.0, 1.0];
                              } else {
                                  var106 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var106 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[4] <= 88.0999984741211) {
                          if (input[0] <= 11.849999904632568) {
                              var106 = [0.0, 0.0, 1.0];
                          } else {
                              var106 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          if (input[0] <= 13.726375102996826) {
                              if (input[4] <= 90.95000076293945) {
                                  var106 = [1.0, 0.0, 0.0];
                              } else {
                                  var106 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var106 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  if (input[4] <= 89.98175811767578) {
                      var106 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[5] <= 25.000000953674316) {
                          var106 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[2] <= 4.700000047683716) {
                              if (input[2] <= 3.090672731399536) {
                                  var106 = [0.0, 0.0, 1.0];
                              } else {
                                  var106 = [0.07142857142857142, 0.0, 0.9285714285714286];
                              }
                          } else {
                              if (input[5] <= 103.6593017578125) {
                                  var106 = [1.0, 0.0, 0.0];
                              } else {
                                  var106 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              }
          } else {
              if (input[4] <= 91.54999923706055) {
                  if (input[0] <= 20.8560152053833) {
                      if (input[4] <= 91.29999923706055) {
                          var106 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[2] <= 4.049999952316284) {
                              if (input[2] <= 2.450000047683716) {
                                  var106 = [1.0, 0.0, 0.0];
                              } else {
                                  var106 = [0.16666666666666666, 0.0, 0.8333333333333334];
                              }
                          } else {
                              var106 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[2] <= 3.549999952316284) {
                          var106 = [0.0, 0.0, 1.0];
                      } else {
                          var106 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[5] <= 106.29999923706055) {
                      if (input[1] <= 39.5) {
                          var106 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[2] <= 2.0) {
                              var106 = [0.0, 0.0, 1.0];
                          } else {
                              var106 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[4] <= 91.60384750366211) {
                          if (input[2] <= 2.899999976158142) {
                              var106 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[2] <= 3.3499999046325684) {
                                  var106 = [0.5, 0.0, 0.5];
                              } else {
                                  var106 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[1] <= 40.0) {
                              var106 = [1.0, 0.0, 0.0];
                          } else {
                              var106 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              }
          }
      } else {
          if (input[2] <= 3.3499999046325684) {
              if (input[1] <= 50.5) {
                  if (input[0] <= 19.65000057220459) {
                      if (input[2] <= 2.899999976158142) {
                          var106 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[5] <= 116.39999771118164) {
                              var106 = [0.0, 0.0, 1.0];
                          } else {
                              var106 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      var106 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[1] <= 52.5) {
                      var106 = [0.0, 0.0, 1.0];
                  } else {
                      var106 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              var106 = [1.0, 0.0, 0.0];
          }
      }
  }
  var94 = addVec(var95, var106);
  let var107: HazardVector = [0, 0, 0];
  if (input[5] <= 71.59341049194336) {
      if (input[4] <= 84.6620979309082) {
          if (input[1] <= 78.5) {
              if (input[1] <= 52.5) {
                  var107 = [0.0, 1.0, 0.0];
              } else {
                  if (input[4] <= 84.53310012817383) {
                      if (input[2] <= 7.586445569992065) {
                          if (input[0] <= 10.750635147094727) {
                              var107 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[4] <= 81.75) {
                                  var107 = [0.0, 1.0, 0.0];
                              } else {
                                  var107 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          var107 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[5] <= 25.745141983032227) {
                          var107 = [0.0, 0.0, 1.0];
                      } else {
                          var107 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[1] <= 79.5) {
                  var107 = [1.0, 0.0, 0.0];
              } else {
                  var107 = [0.0, 1.0, 0.0];
              }
          }
      } else {
          if (input[1] <= 23.0) {
              if (input[0] <= 10.321441173553467) {
                  var107 = [0.0, 1.0, 0.0];
              } else {
                  var107 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[0] <= 22.350000381469727) {
                  if (input[4] <= 90.75571060180664) {
                      if (input[4] <= 85.68462371826172) {
                          if (input[4] <= 85.3605842590332) {
                              if (input[0] <= 5.665174245834351) {
                                  var107 = [0.0, 0.0, 1.0];
                              } else {
                                  var107 = [0.0, 0.23529411764705882, 0.7647058823529411];
                              }
                          } else {
                              var107 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          if (input[1] <= 60.5) {
                              if (input[4] <= 85.92582321166992) {
                                  var107 = [0.0, 0.08333333333333333, 0.9166666666666666];
                              } else {
                                  var107 = [0.012048192771084338, 0.0, 0.9879518072289156];
                              }
                          } else {
                              var107 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[2] <= 3.8408459424972534) {
                          if (input[1] <= 33.0) {
                              var107 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[5] <= 40.22723197937012) {
                                  var107 = [0.0, 0.0, 1.0];
                              } else {
                                  var107 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          var107 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[5] <= 56.14999961853027) {
                      if (input[0] <= 26.300000190734863) {
                          var107 = [0.0, 0.0, 1.0];
                      } else {
                          var107 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var107 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  } else {
      if (input[4] <= 91.75) {
          if (input[4] <= 91.091796875) {
              if (input[4] <= 90.7147102355957) {
                  if (input[1] <= 77.0) {
                      if (input[1] <= 57.5) {
                          if (input[2] <= 4.844913005828857) {
                              var107 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[1] <= 40.5) {
                                  var107 = [1.0, 0.0, 0.0];
                              } else {
                                  var107 = [0.3, 0.0, 0.7];
                              }
                          }
                      } else {
                          if (input[2] <= 5.366742849349976) {
                              if (input[1] <= 60.5) {
                                  var107 = [1.0, 0.0, 0.0];
                              } else {
                                  var107 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var107 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      var107 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[5] <= 264.7198944091797) {
                      var107 = [0.0, 0.0, 1.0];
                  } else {
                      var107 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[5] <= 243.29999542236328) {
                  if (input[1] <= 80.0) {
                      if (input[1] <= 45.5) {
                          if (input[2] <= 2.6406877040863037) {
                              if (input[4] <= 91.54999923706055) {
                                  var107 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              } else {
                                  var107 = [0.15384615384615385, 0.0, 0.8461538461538461];
                              }
                          } else {
                              if (input[2] <= 4.35884952545166) {
                                  var107 = [0.5909090909090909, 0.0, 0.4090909090909091];
                              } else {
                                  var107 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[5] <= 106.29999923706055) {
                              var107 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[4] <= 91.54999923706055) {
                                  var107 = [1.0, 0.0, 0.0];
                              } else {
                                  var107 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              }
                          }
                      }
                  } else {
                      if (input[4] <= 91.5) {
                          var107 = [1.0, 0.0, 0.0];
                      } else {
                          var107 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  var107 = [0.0, 0.0, 1.0];
              }
          }
      } else {
          if (input[0] <= 16.759614944458008) {
              if (input[1] <= 52.0) {
                  if (input[5] <= 110.0) {
                      var107 = [1.0, 0.0, 0.0];
                  } else {
                      var107 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var107 = [1.0, 0.0, 0.0];
              }
          } else {
              var107 = [1.0, 0.0, 0.0];
          }
      }
  }
  var93 = addVec(var94, var107);
  let var108: HazardVector = [0, 0, 0];
  if (input[4] <= 84.84973907470703) {
      if (input[1] <= 51.5) {
          if (input[5] <= 66.41883659362793) {
              var108 = [0.0, 1.0, 0.0];
          } else {
              var108 = [0.0, 0.0, 1.0];
          }
      } else {
          if (input[2] <= 6.705887317657471) {
              if (input[0] <= 4.453939437866211) {
                  var108 = [0.0, 0.0, 1.0];
              } else {
                  if (input[5] <= 3.332324981689453) {
                      if (input[1] <= 82.5) {
                          var108 = [0.0, 0.0, 1.0];
                      } else {
                          var108 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      if (input[4] <= 84.64999771118164) {
                          if (input[4] <= 84.14999771118164) {
                              if (input[0] <= 11.78834581375122) {
                                  var108 = [0.0, 1.0, 0.0];
                              } else {
                                  var108 = [0.0, 0.9583333333333334, 0.041666666666666664];
                              }
                          } else {
                              if (input[4] <= 84.27057266235352) {
                                  var108 = [1.0, 0.0, 0.0];
                              } else {
                                  var108 = [0.0, 1.0, 0.0];
                              }
                          }
                      } else {
                          if (input[0] <= 6.595391511917114) {
                              var108 = [0.0, 1.0, 0.0];
                          } else {
                              var108 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              }
          } else {
              var108 = [0.0, 0.0, 1.0];
          }
      }
  } else {
      if (input[5] <= 131.0419692993164) {
          if (input[5] <= 33.04999923706055) {
              if (input[4] <= 90.13991928100586) {
                  if (input[0] <= 4.902908563613892) {
                      if (input[4] <= 85.12616348266602) {
                          var108 = [0.0, 0.0, 1.0];
                      } else {
                          var108 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      if (input[2] <= 6.224472761154175) {
                          if (input[2] <= 5.722733497619629) {
                              var108 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[1] <= 43.0) {
                                  var108 = [0.0, 0.0, 1.0];
                              } else {
                                  var108 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[1] <= 49.0) {
                              var108 = [0.0, 0.0, 1.0];
                          } else {
                              var108 = [0.0, 1.0, 0.0];
                          }
                      }
                  }
              } else {
                  var108 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[4] <= 91.78664779663086) {
                  if (input[2] <= 3.977606415748596) {
                      if (input[2] <= 1.0999999642372131) {
                          if (input[0] <= 15.650000095367432) {
                              var108 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[0] <= 21.649999618530273) {
                                  var108 = [0.0, 0.0, 1.0];
                              } else {
                                  var108 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[0] <= 24.049999237060547) {
                              if (input[0] <= 15.150000095367432) {
                                  var108 = [0.13043478260869565, 0.0, 0.8695652173913043];
                              } else {
                                  var108 = [0.02608695652173913, 0.0, 0.9739130434782609];
                              }
                          } else {
                              var108 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[4] <= 91.04999923706055) {
                          if (input[0] <= 19.98665142059326) {
                              if (input[2] <= 6.5) {
                                  var108 = [0.1875, 0.0, 0.8125];
                              } else {
                                  var108 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[2] <= 4.700000047683716) {
                                  var108 = [0.0, 0.0, 1.0];
                              } else {
                                  var108 = [0.875, 0.0, 0.125];
                              }
                          }
                      } else {
                          if (input[0] <= 17.646259307861328) {
                              var108 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[2] <= 4.358978986740112) {
                                  var108 = [0.25, 0.0, 0.75];
                              } else {
                                  var108 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[4] <= 91.9976806640625) {
                      if (input[0] <= 17.510193824768066) {
                          var108 = [0.0, 0.0, 1.0];
                      } else {
                          var108 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var108 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[5] <= 243.29999542236328) {
              if (input[4] <= 90.91413116455078) {
                  if (input[2] <= 4.25) {
                      var108 = [0.0, 0.0, 1.0];
                  } else {
                      var108 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[5] <= 138.75) {
                      if (input[1] <= 39.5) {
                          var108 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[0] <= 16.549999713897705) {
                              var108 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[4] <= 92.95000076293945) {
                                  var108 = [0.0, 0.0, 1.0];
                              } else {
                                  var108 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      var108 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[1] <= 68.5) {
                  if (input[0] <= 16.40000057220459) {
                      var108 = [1.0, 0.0, 0.0];
                  } else {
                      var108 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var108 = [1.0, 0.0, 0.0];
              }
          }
      }
  }
  var92 = addVec(var93, var108);
  let var109: HazardVector = [0, 0, 0];
  if (input[4] <= 84.86700820922852) {
      if (input[4] <= 84.16609573364258) {
          if (input[1] <= 73.5) {
              if (input[5] <= 27.403904914855957) {
                  var109 = [0.0, 1.0, 0.0];
              } else {
                  if (input[5] <= 29.146625518798828) {
                      var109 = [0.0, 0.0, 1.0];
                  } else {
                      var109 = [0.0, 1.0, 0.0];
                  }
              }
          } else {
              if (input[2] <= 2.2595158219337463) {
                  if (input[4] <= 50.30000114440918) {
                      var109 = [0.0, 1.0, 0.0];
                  } else {
                      var109 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[4] <= 82.29476165771484) {
                      var109 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[2] <= 2.8525681495666504) {
                          var109 = [0.0, 1.0, 0.0];
                      } else {
                          var109 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          }
      } else {
          if (input[0] <= 4.950000047683716) {
              var109 = [0.0, 0.0, 1.0];
          } else {
              if (input[5] <= 26.81865692138672) {
                  if (input[1] <= 67.0) {
                      if (input[0] <= 8.69905424118042) {
                          if (input[2] <= 8.71586561203003) {
                              var109 = [0.0, 1.0, 0.0];
                          } else {
                              var109 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var109 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      if (input[2] <= 4.700000047683716) {
                          var109 = [1.0, 0.0, 0.0];
                      } else {
                          var109 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  var109 = [0.0, 0.0, 1.0];
              }
          }
      }
  } else {
      if (input[2] <= 3.977606415748596) {
          if (input[1] <= 30.5) {
              if (input[0] <= 17.629837036132812) {
                  var109 = [0.0, 0.0, 1.0];
              } else {
                  if (input[4] <= 91.00689697265625) {
                      if (input[1] <= 28.0) {
                          var109 = [0.0, 0.0, 1.0];
                      } else {
                          var109 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var109 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[5] <= 131.84197235107422) {
                  if (input[5] <= 65.89999961853027) {
                      if (input[5] <= 40.22723197937012) {
                          var109 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 42.39612007141113) {
                              var109 = [1.0, 0.0, 0.0];
                          } else {
                              var109 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[0] <= 21.25) {
                          if (input[0] <= 14.983121395111084) {
                              if (input[1] <= 68.0) {
                                  var109 = [1.0, 0.0, 0.0];
                              } else {
                                  var109 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              }
                          } else {
                              if (input[4] <= 92.0) {
                                  var109 = [0.12857142857142856, 0.0, 0.8714285714285714];
                              } else {
                                  var109 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[4] <= 91.3499984741211) {
                              var109 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[2] <= 2.450000047683716) {
                                  var109 = [0.0, 0.0, 1.0];
                              } else {
                                  var109 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[1] <= 43.5) {
                      if (input[4] <= 90.8499984741211) {
                          var109 = [0.0, 0.0, 1.0];
                      } else {
                          var109 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[5] <= 187.70000457763672) {
                          if (input[1] <= 75.0) {
                              var109 = [1.0, 0.0, 0.0];
                          } else {
                              var109 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[5] <= 279.8999938964844) {
                              if (input[2] <= 2.6880111694335938) {
                                  var109 = [0.0, 0.0, 1.0];
                              } else {
                                  var109 = [0.1111111111111111, 0.0, 0.8888888888888888];
                              }
                          } else {
                              var109 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          }
      } else {
          if (input[5] <= 33.04999923706055) {
              if (input[1] <= 23.0) {
                  if (input[2] <= 8.049999952316284) {
                      var109 = [1.0, 0.0, 0.0];
                  } else {
                      var109 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[5] <= 20.734274864196777) {
                      if (input[5] <= 10.062615871429443) {
                          var109 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 16.6751070022583) {
                              var109 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[1] <= 49.0) {
                                  var109 = [1.0, 0.0, 0.0];
                              } else {
                                  var109 = [0.0, 1.0, 0.0];
                              }
                          }
                      }
                  } else {
                      var109 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[2] <= 4.108651876449585) {
                  if (input[4] <= 90.8499984741211) {
                      if (input[1] <= 45.5) {
                          var109 = [0.0, 0.0, 1.0];
                      } else {
                          var109 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var109 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[1] <= 42.5) {
                      if (input[2] <= 4.477004528045654) {
                          var109 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 35.60000038146973) {
                              if (input[1] <= 24.5) {
                                  var109 = [0.0, 0.0, 1.0];
                              } else {
                                  var109 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[4] <= 90.5347900390625) {
                                  var109 = [0.8333333333333334, 0.0, 0.16666666666666666];
                              } else {
                                  var109 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      if (input[0] <= 11.099999904632568) {
                          var109 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[1] <= 46.0) {
                              if (input[4] <= 92.5) {
                                  var109 = [0.125, 0.0, 0.875];
                              } else {
                                  var109 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[4] <= 91.0999984741211) {
                                  var109 = [0.5483870967741935, 0.0, 0.45161290322580644];
                              } else {
                                  var109 = [0.9666666666666667, 0.0, 0.03333333333333333];
                              }
                          }
                      }
                  }
              }
          }
      }
  }
  var91 = addVec(var92, var109);
  let var110: HazardVector = [0, 0, 0];
  if (input[4] <= 85.58578872680664) {
      if (input[0] <= 4.453939437866211) {
          var110 = [0.0, 0.0, 1.0];
      } else {
          if (input[2] <= 8.783466339111328) {
              if (input[5] <= 71.57751846313477) {
                  if (input[5] <= 9.400000095367432) {
                      if (input[2] <= 7.150000095367432) {
                          if (input[5] <= 3.382325053215027) {
                              if (input[4] <= 75.9059066772461) {
                                  var110 = [0.0, 1.0, 0.0];
                              } else {
                                  var110 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[2] <= 3.117082357406616) {
                                  var110 = [0.014084507042253521, 0.971830985915493, 0.014084507042253521];
                              } else {
                                  var110 = [0.0, 1.0, 0.0];
                              }
                          }
                      } else {
                          var110 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[1] <= 91.5) {
                          if (input[0] <= 19.27428150177002) {
                              if (input[0] <= 16.337430953979492) {
                                  var110 = [0.0, 0.9230769230769231, 0.07692307692307693];
                              } else {
                                  var110 = [0.0, 0.4444444444444444, 0.5555555555555556];
                              }
                          } else {
                              var110 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          var110 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  var110 = [0.0, 0.0, 1.0];
              }
          } else {
              var110 = [0.0, 0.0, 1.0];
          }
      }
  } else {
      if (input[4] <= 91.78664779663086) {
          if (input[4] <= 90.99492645263672) {
              if (input[0] <= 11.921021938323975) {
                  if (input[1] <= 58.5) {
                      if (input[1] <= 39.5) {
                          var110 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[0] <= 10.20091724395752) {
                              if (input[2] <= 5.475009202957153) {
                                  var110 = [0.0, 0.0, 1.0];
                              } else {
                                  var110 = [0.5, 0.0, 0.5];
                              }
                          } else {
                              var110 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[1] <= 68.5) {
                          if (input[5] <= 46.85000038146973) {
                              var110 = [1.0, 0.0, 0.0];
                          } else {
                              var110 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var110 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[5] <= 49.19999885559082) {
                      if (input[2] <= 6.170847654342651) {
                          if (input[0] <= 12.430298805236816) {
                              if (input[1] <= 53.5) {
                                  var110 = [0.0, 0.0, 1.0];
                              } else {
                                  var110 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var110 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[5] <= 22.600000381469727) {
                              var110 = [0.0, 1.0, 0.0];
                          } else {
                              var110 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[5] <= 50.15443229675293) {
                          var110 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[0] <= 14.79036808013916) {
                              if (input[2] <= 5.369261980056763) {
                                  var110 = [0.07692307692307693, 0.0, 0.9230769230769231];
                              } else {
                                  var110 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[4] <= 90.54999923706055) {
                                  var110 = [0.12280701754385964, 0.0, 0.8771929824561403];
                              } else {
                                  var110 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              }
          } else {
              if (input[2] <= 3.959672212600708) {
                  if (input[1] <= 30.5) {
                      var110 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[0] <= 20.600000381469727) {
                          if (input[0] <= 13.450000286102295) {
                              var110 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[1] <= 45.5) {
                                  var110 = [0.0, 0.0, 1.0];
                              } else {
                                  var110 = [0.08333333333333333, 0.0, 0.9166666666666666];
                              }
                          }
                      } else {
                          if (input[5] <= 110.4000015258789) {
                              if (input[0] <= 21.543170928955078) {
                                  var110 = [1.0, 0.0, 0.0];
                              } else {
                                  var110 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[1] <= 51.0) {
                                  var110 = [1.0, 0.0, 0.0];
                              } else {
                                  var110 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[0] <= 19.068185806274414) {
                      if (input[5] <= 78.35000038146973) {
                          var110 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[1] <= 63.0) {
                              if (input[0] <= 17.550000190734863) {
                                  var110 = [0.375, 0.0, 0.625];
                              } else {
                                  var110 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var110 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      var110 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[5] <= 115.09444427490234) {
              if (input[0] <= 16.909615516662598) {
                  if (input[0] <= 15.549999713897705) {
                      var110 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[5] <= 109.69841766357422) {
                          var110 = [1.0, 0.0, 0.0];
                      } else {
                          var110 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  var110 = [1.0, 0.0, 0.0];
              }
          } else {
              var110 = [1.0, 0.0, 0.0];
          }
      }
  }
  var90 = addVec(var91, var110);
  let var111: HazardVector = [0, 0, 0];
  if (input[5] <= 71.493408203125) {
      if (input[4] <= 85.68462371826172) {
          if (input[5] <= 22.319673538208008) {
              if (input[4] <= 84.58483505249023) {
                  if (input[5] <= 3.299999952316284) {
                      if (input[2] <= 2.2910468578338623) {
                          if (input[2] <= 1.3499999642372131) {
                              var111 = [0.0, 1.0, 0.0];
                          } else {
                              var111 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var111 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      if (input[5] <= 4.549962282180786) {
                          if (input[4] <= 82.52257919311523) {
                              var111 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[5] <= 4.5339155197143555) {
                                  var111 = [0.0, 1.0, 0.0];
                              } else {
                                  var111 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          var111 = [0.0, 1.0, 0.0];
                      }
                  }
              } else {
                  if (input[0] <= 8.69905424118042) {
                      var111 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[0] <= 12.818734645843506) {
                          if (input[0] <= 12.407690048217773) {
                              if (input[5] <= 13.219916343688965) {
                                  var111 = [0.0, 0.0, 1.0];
                              } else {
                                  var111 = [0.0, 1.0, 0.0];
                              }
                          } else {
                              var111 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var111 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[0] <= 4.566897630691528) {
                  var111 = [0.0, 0.0, 1.0];
              } else {
                  if (input[4] <= 84.6109504699707) {
                      if (input[0] <= 5.115105867385864) {
                          if (input[2] <= 6.450000047683716) {
                              var111 = [0.0, 1.0, 0.0];
                          } else {
                              var111 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var111 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      if (input[2] <= 8.126859903335571) {
                          if (input[2] <= 4.954414367675781) {
                              var111 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[0] <= 6.528637886047363) {
                                  var111 = [0.0, 0.6, 0.4];
                              } else {
                                  var111 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          var111 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          }
      } else {
          if (input[1] <= 36.5) {
              if (input[0] <= 17.673460006713867) {
                  if (input[5] <= 21.5) {
                      if (input[0] <= 8.849999904632568) {
                          var111 = [0.0, 0.0, 1.0];
                      } else {
                          var111 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[5] <= 44.88421630859375) {
                          if (input[1] <= 27.5) {
                              if (input[2] <= 4.0) {
                                  var111 = [0.0, 0.0, 1.0];
                              } else {
                                  var111 = [0.8333333333333334, 0.0, 0.16666666666666666];
                              }
                          } else {
                              var111 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var111 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[4] <= 91.0) {
                      var111 = [0.0, 0.0, 1.0];
                  } else {
                      var111 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[5] <= 57.19999885559082) {
                  if (input[1] <= 53.5) {
                      if (input[4] <= 90.67774200439453) {
                          if (input[0] <= 10.20091724395752) {
                              if (input[0] <= 9.75) {
                                  var111 = [0.0, 0.0, 1.0];
                              } else {
                                  var111 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var111 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[0] <= 14.599999904632568) {
                              var111 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[4] <= 91.54999923706055) {
                                  var111 = [0.0, 0.0, 1.0];
                              } else {
                                  var111 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      if (input[2] <= 3.3499999046325684) {
                          var111 = [0.0, 0.0, 1.0];
                      } else {
                          var111 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  var111 = [1.0, 0.0, 0.0];
              }
          }
      }
  } else {
      if (input[4] <= 91.95000076293945) {
          if (input[2] <= 4.476953744888306) {
              if (input[4] <= 91.091796875) {
                  if (input[5] <= 277.34999084472656) {
                      if (input[4] <= 90.14999771118164) {
                          if (input[5] <= 104.72059631347656) {
                              var111 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[1] <= 60.0) {
                                  var111 = [0.0, 0.0, 1.0];
                              } else {
                                  var111 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              }
                          }
                      } else {
                          var111 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var111 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[4] <= 91.54999923706055) {
                      if (input[5] <= 243.97022247314453) {
                          if (input[1] <= 33.0) {
                              if (input[0] <= 19.75) {
                                  var111 = [1.0, 0.0, 0.0];
                              } else {
                                  var111 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[4] <= 91.38941955566406) {
                                  var111 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              } else {
                                  var111 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          var111 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[1] <= 39.5) {
                          if (input[2] <= 2.450000047683716) {
                              if (input[5] <= 106.29999923706055) {
                                  var111 = [1.0, 0.0, 0.0];
                              } else {
                                  var111 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var111 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[0] <= 20.550000190734863) {
                              if (input[5] <= 106.29999923706055) {
                                  var111 = [1.0, 0.0, 0.0];
                              } else {
                                  var111 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[2] <= 1.0999999642372131) {
                                  var111 = [1.0, 0.0, 0.0];
                              } else {
                                  var111 = [0.4, 0.0, 0.6];
                              }
                          }
                      }
                  }
              }
          } else {
              if (input[1] <= 40.5) {
                  var111 = [1.0, 0.0, 0.0];
              } else {
                  if (input[1] <= 65.5) {
                      if (input[2] <= 5.536835432052612) {
                          if (input[4] <= 91.0999984741211) {
                              if (input[0] <= 17.25) {
                                  var111 = [0.0, 0.0, 1.0];
                              } else {
                                  var111 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              }
                          } else {
                              if (input[0] <= 17.550000190734863) {
                                  var111 = [1.0, 0.0, 0.0];
                              } else {
                                  var111 = [0.5, 0.0, 0.5];
                              }
                          }
                      } else {
                          if (input[4] <= 90.27288055419922) {
                              if (input[5] <= 109.45000076293945) {
                                  var111 = [1.0, 0.0, 0.0];
                              } else {
                                  var111 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var111 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[2] <= 5.366742849349976) {
                          if (input[2] <= 5.116742849349976) {
                              var111 = [1.0, 0.0, 0.0];
                          } else {
                              var111 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var111 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      } else {
          var111 = [1.0, 0.0, 0.0];
      }
  }
  var89 = addVec(var90, var111);
  let var112: HazardVector = [0, 0, 0];
  if (input[0] <= 15.073886394500732) {
      if (input[0] <= 10.05854845046997) {
          if (input[2] <= 6.465764999389648) {
              if (input[5] <= 16.467085361480713) {
                  var112 = [0.0, 1.0, 0.0];
              } else {
                  if (input[2] <= 4.920386791229248) {
                      if (input[2] <= 4.747676134109497) {
                          if (input[4] <= 60.991987228393555) {
                              var112 = [0.0, 1.0, 0.0];
                          } else {
                              var112 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[0] <= 3.649999976158142) {
                              var112 = [0.0, 0.0, 1.0];
                          } else {
                              var112 = [0.0, 1.0, 0.0];
                          }
                      }
                  } else {
                      if (input[1] <= 55.0) {
                          var112 = [1.0, 0.0, 0.0];
                      } else {
                          var112 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[4] <= 85.32582092285156) {
                  if (input[4] <= 83.35464096069336) {
                      var112 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[2] <= 7.360508441925049) {
                          if (input[0] <= 9.021132469177246) {
                              var112 = [0.0, 0.0, 1.0];
                          } else {
                              var112 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          var112 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  if (input[4] <= 89.4000015258789) {
                      var112 = [0.0, 1.0, 0.0];
                  } else {
                      var112 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[5] <= 9.70737600326538) {
              if (input[0] <= 10.233916759490967) {
                  var112 = [0.0, 0.0, 1.0];
              } else {
                  if (input[5] <= 3.4442325830459595) {
                      if (input[5] <= 2.8351413011550903) {
                          var112 = [0.0, 1.0, 0.0];
                      } else {
                          var112 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var112 = [0.0, 1.0, 0.0];
                  }
              }
          } else {
              if (input[4] <= 84.71034622192383) {
                  var112 = [0.0, 1.0, 0.0];
              } else {
                  if (input[1] <= 63.5) {
                      if (input[0] <= 13.676374912261963) {
                          if (input[4] <= 85.92582321166992) {
                              if (input[2] <= 5.460963010787964) {
                                  var112 = [0.0, 0.0, 1.0];
                              } else {
                                  var112 = [0.0, 1.0, 0.0];
                              }
                          } else {
                              if (input[2] <= 0.9216743409633636) {
                                  var112 = [1.0, 0.0, 0.0];
                              } else {
                                  var112 = [0.024390243902439025, 0.0, 0.975609756097561];
                              }
                          }
                      } else {
                          if (input[2] <= 5.305146217346191) {
                              if (input[5] <= 44.88421630859375) {
                                  var112 = [0.0, 0.0, 1.0];
                              } else {
                                  var112 = [0.6, 0.0, 0.4];
                              }
                          } else {
                              var112 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[1] <= 78.5) {
                          if (input[1] <= 71.5) {
                              if (input[4] <= 89.41674423217773) {
                                  var112 = [1.0, 0.0, 0.0];
                              } else {
                                  var112 = [0.4, 0.0, 0.6];
                              }
                          } else {
                              if (input[2] <= 2.1655962467193604) {
                                  var112 = [0.0, 0.0, 1.0];
                              } else {
                                  var112 = [0.8333333333333334, 0.0, 0.16666666666666666];
                              }
                          }
                      } else {
                          if (input[0] <= 13.0) {
                              if (input[2] <= 4.700000047683716) {
                                  var112 = [1.0, 0.0, 0.0];
                              } else {
                                  var112 = [0.5, 0.0, 0.5];
                              }
                          } else {
                              var112 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              }
          }
      }
  } else {
      if (input[4] <= 91.95000076293945) {
          if (input[5] <= 71.0) {
              if (input[4] <= 83.25) {
                  var112 = [0.0, 1.0, 0.0];
              } else {
                  if (input[0] <= 15.150000095367432) {
                      var112 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[5] <= 48.39999961853027) {
                          if (input[1] <= 29.5) {
                              if (input[5] <= 37.75) {
                                  var112 = [0.375, 0.0, 0.625];
                              } else {
                                  var112 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var112 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[2] <= 2.0) {
                              var112 = [0.0, 0.0, 1.0];
                          } else {
                              var112 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          } else {
              if (input[2] <= 4.362565517425537) {
                  if (input[0] <= 24.799999237060547) {
                      if (input[4] <= 91.09317016601562) {
                          if (input[0] <= 16.382689476013184) {
                              if (input[1] <= 58.5) {
                                  var112 = [0.5, 0.0, 0.5];
                              } else {
                                  var112 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var112 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[5] <= 106.29999923706055) {
                              if (input[4] <= 91.21435546875) {
                                  var112 = [1.0, 0.0, 0.0];
                              } else {
                                  var112 = [0.8333333333333334, 0.0, 0.16666666666666666];
                              }
                          } else {
                              if (input[0] <= 21.10903835296631) {
                                  var112 = [0.07692307692307693, 0.0, 0.9230769230769231];
                              } else {
                                  var112 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      if (input[4] <= 89.95000076293945) {
                          var112 = [0.0, 0.0, 1.0];
                      } else {
                          var112 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[5] <= 128.3499984741211) {
                      if (input[0] <= 19.306270599365234) {
                          if (input[5] <= 102.6500015258789) {
                              if (input[4] <= 90.14999771118164) {
                                  var112 = [0.5, 0.0, 0.5];
                              } else {
                                  var112 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var112 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[0] <= 19.98665142059326) {
                              var112 = [0.0, 0.0, 1.0];
                          } else {
                              var112 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      var112 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          var112 = [1.0, 0.0, 0.0];
      }
  }
  var88 = addVec(var89, var112);
  let var113: HazardVector = [0, 0, 0];
  if (input[1] <= 66.5) {
      if (input[4] <= 84.58483505249023) {
          if (input[0] <= 23.933034896850586) {
              var113 = [0.0, 1.0, 0.0];
          } else {
              if (input[2] <= 3.0240265130996704) {
                  var113 = [0.0, 1.0, 0.0];
              } else {
                  if (input[4] <= 83.0) {
                      var113 = [0.0, 1.0, 0.0];
                  } else {
                      var113 = [0.0, 0.0, 1.0];
                  }
              }
          }
      } else {
          if (input[5] <= 129.8000030517578) {
              if (input[1] <= 21.5) {
                  if (input[2] <= 6.5) {
                      var113 = [1.0, 0.0, 0.0];
                  } else {
                      var113 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[2] <= 3.978654384613037) {
                      if (input[4] <= 92.0) {
                          if (input[2] <= 0.9216743409633636) {
                              if (input[1] <= 46.5) {
                                  var113 = [1.0, 0.0, 0.0];
                              } else {
                                  var113 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[2] <= 2.690904974937439) {
                                  var113 = [0.010101010101010102, 0.0, 0.98989898989899];
                              } else {
                                  var113 = [0.15, 0.0, 0.85];
                              }
                          }
                      } else {
                          var113 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[1] <= 44.5) {
                          if (input[1] <= 42.5) {
                              if (input[2] <= 4.42339301109314) {
                                  var113 = [0.5, 0.0, 0.5];
                              } else {
                                  var113 = [0.7837837837837838, 0.013513513513513514, 0.20270270270270271];
                              }
                          } else {
                              if (input[5] <= 49.35443305969238) {
                                  var113 = [1.0, 0.0, 0.0];
                              } else {
                                  var113 = [0.25, 0.0, 0.75];
                              }
                          }
                      } else {
                          if (input[4] <= 89.5999984741211) {
                              if (input[5] <= 26.153124809265137) {
                                  var113 = [0.0, 0.4, 0.6];
                              } else {
                                  var113 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[0] <= 14.727323532104492) {
                                  var113 = [0.25, 0.0, 0.75];
                              } else {
                                  var113 = [0.7692307692307693, 0.0, 0.23076923076923078];
                              }
                          }
                      }
                  }
              }
          } else {
              if (input[4] <= 91.0808334350586) {
                  if (input[4] <= 89.40165328979492) {
                      var113 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[0] <= 23.280930519104004) {
                          if (input[1] <= 53.5) {
                              var113 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[1] <= 60.5) {
                                  var113 = [1.0, 0.0, 0.0];
                              } else {
                                  var113 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          var113 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[1] <= 54.5) {
                      var113 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[5] <= 243.29999542236328) {
                          var113 = [1.0, 0.0, 0.0];
                      } else {
                          var113 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          }
      }
  } else {
      if (input[5] <= 75.95000076293945) {
          if (input[4] <= 84.3906021118164) {
              if (input[0] <= 11.778302192687988) {
                  var113 = [0.0, 1.0, 0.0];
              } else {
                  if (input[2] <= 3.7817811965942383) {
                      if (input[0] <= 14.596850872039795) {
                          var113 = [0.0, 0.0, 1.0];
                      } else {
                          var113 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      var113 = [0.0, 1.0, 0.0];
                  }
              }
          } else {
              if (input[4] <= 89.54999923706055) {
                  var113 = [0.0, 0.0, 1.0];
              } else {
                  var113 = [1.0, 0.0, 0.0];
              }
          }
      } else {
          if (input[1] <= 77.5) {
              if (input[0] <= 15.900000095367432) {
                  if (input[1] <= 71.5) {
                      var113 = [0.0, 0.0, 1.0];
                  } else {
                      var113 = [1.0, 0.0, 0.0];
                  }
              } else {
                  var113 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[1] <= 86.5) {
                  if (input[2] <= 2.0) {
                      var113 = [0.0, 0.0, 1.0];
                  } else {
                      var113 = [1.0, 0.0, 0.0];
                  }
              } else {
                  var113 = [1.0, 0.0, 0.0];
              }
          }
      }
  }
  var87 = addVec(var88, var113);
  let var114: HazardVector = [0, 0, 0];
  if (input[1] <= 66.5) {
      if (input[0] <= 15.096360206604004) {
          if (input[5] <= 26.550000190734863) {
              if (input[4] <= 85.7462158203125) {
                  if (input[4] <= 84.58483505249023) {
                      var114 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[5] <= 6.703080654144287) {
                          var114 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[4] <= 84.63151550292969) {
                              if (input[5] <= 25.745141983032227) {
                                  var114 = [0.0, 0.0, 1.0];
                              } else {
                                  var114 = [0.0, 1.0, 0.0];
                              }
                          } else {
                              if (input[2] <= 3.889605402946472) {
                                  var114 = [0.0, 0.0, 1.0];
                              } else {
                                  var114 = [0.0, 1.0, 0.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[0] <= 11.827940464019775) {
                      if (input[4] <= 86.67578887939453) {
                          var114 = [0.0, 0.0, 1.0];
                      } else {
                          var114 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[4] <= 86.19046020507812) {
                          var114 = [0.0, 1.0, 0.0];
                      } else {
                          var114 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          } else {
              if (input[4] <= 84.2206916809082) {
                  if (input[4] <= 83.84362411499023) {
                      var114 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[2] <= 6.53379225730896) {
                          var114 = [0.0, 1.0, 0.0];
                      } else {
                          var114 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  if (input[0] <= 11.25) {
                      var114 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[5] <= 117.89753723144531) {
                          if (input[5] <= 94.09440994262695) {
                              if (input[4] <= 90.70000076293945) {
                                  var114 = [0.125, 0.0, 0.875];
                              } else {
                                  var114 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var114 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var114 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          }
      } else {
          if (input[2] <= 3.959672212600708) {
              if (input[1] <= 30.5) {
                  if (input[2] <= 3.273293972015381) {
                      if (input[1] <= 27.5) {
                          if (input[0] <= 17.491265296936035) {
                              var114 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[5] <= 112.14999771118164) {
                                  var114 = [0.0, 0.0, 1.0];
                              } else {
                                  var114 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          var114 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[1] <= 24.5) {
                          var114 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[2] <= 3.758404850959778) {
                              if (input[0] <= 17.284470558166504) {
                                  var114 = [1.0, 0.0, 0.0];
                              } else {
                                  var114 = [0.16666666666666666, 0.0, 0.8333333333333334];
                              }
                          } else {
                              var114 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  if (input[2] <= 1.3390417098999023) {
                      if (input[0] <= 22.300000190734863) {
                          var114 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[0] <= 24.09999942779541) {
                              var114 = [0.0, 0.0, 1.0];
                          } else {
                              var114 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[1] <= 50.5) {
                          if (input[0] <= 24.049999237060547) {
                              if (input[2] <= 3.6155049800872803) {
                                  var114 = [0.35374149659863946, 0.013605442176870748, 0.6326530612244898];
                              } else {
                                  var114 = [0.0, 0.4166666666666667, 0.5833333333333334];
                              }
                          } else {
                              if (input[4] <= 90.29999923706055) {
                                  var114 = [0.0, 0.875, 0.125];
                              } else {
                                  var114 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[5] <= 88.21516036987305) {
                              if (input[2] <= 2.8393474817276) {
                                  var114 = [0.0, 0.0, 1.0];
                              } else {
                                  var114 = [0.5, 0.25, 0.25];
                              }
                          } else {
                              if (input[0] <= 21.406014442443848) {
                                  var114 = [0.022222222222222223, 0.0, 0.9777777777777777];
                              } else {
                                  var114 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              }
          } else {
              if (input[5] <= 84.5999984741211) {
                  if (input[4] <= 83.43782043457031) {
                      var114 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[4] <= 91.14999771118164) {
                          if (input[2] <= 8.049999952316284) {
                              if (input[0] <= 16.631765365600586) {
                                  var114 = [0.14285714285714285, 0.0, 0.8571428571428571];
                              } else {
                                  var114 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var114 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var114 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[2] <= 4.358978986740112) {
                      if (input[4] <= 91.92840957641602) {
                          if (input[1] <= 40.0) {
                              var114 = [1.0, 0.0, 0.0];
                          } else {
                              var114 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var114 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[5] <= 114.85000228881836) {
                          if (input[5] <= 109.35930252075195) {
                              if (input[5] <= 103.04999923706055) {
                                  var114 = [1.0, 0.0, 0.0];
                              } else {
                                  var114 = [0.7142857142857143, 0.0, 0.2857142857142857];
                              }
                          } else {
                              if (input[4] <= 91.89999771118164) {
                                  var114 = [0.0, 0.0, 1.0];
                              } else {
                                  var114 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          var114 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      }
  } else {
      if (input[4] <= 84.47616195678711) {
          if (input[2] <= 1.86801016330719) {
              if (input[1] <= 71.0) {
                  var114 = [0.0, 1.0, 0.0];
              } else {
                  var114 = [0.0, 0.0, 1.0];
              }
          } else {
              var114 = [0.0, 1.0, 0.0];
          }
      } else {
          if (input[2] <= 6.455514192581177) {
              if (input[4] <= 89.16718673706055) {
                  var114 = [0.0, 0.0, 1.0];
              } else {
                  if (input[1] <= 71.5) {
                      if (input[1] <= 68.5) {
                          var114 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[2] <= 2.899999976158142) {
                              var114 = [1.0, 0.0, 0.0];
                          } else {
                              var114 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      var114 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              var114 = [1.0, 0.0, 0.0];
          }
      }
  }
  var86 = addVec(var87, var114);
  let var115: HazardVector = [0, 0, 0];
  if (input[4] <= 85.68462371826172) {
      if (input[2] <= 6.692332983016968) {
          if (input[5] <= 71.57751846313477) {
              if (input[5] <= 8.942739486694336) {
                  if (input[5] <= 6.800569295883179) {
                      if (input[5] <= 6.748229026794434) {
                          if (input[0] <= 11.898969173431396) {
                              var115 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[2] <= 3.1993714570999146) {
                                  var115 = [0.0, 0.0, 1.0];
                              } else {
                                  var115 = [0.0, 1.0, 0.0];
                              }
                          }
                      } else {
                          var115 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var115 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[0] <= 4.830510377883911) {
                      var115 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[5] <= 9.020986557006836) {
                          var115 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[4] <= 84.87357711791992) {
                              var115 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[2] <= 5.7503767013549805) {
                                  var115 = [0.0, 0.0, 1.0];
                              } else {
                                  var115 = [0.0, 1.0, 0.0];
                              }
                          }
                      }
                  }
              }
          } else {
              var115 = [0.0, 0.0, 1.0];
          }
      } else {
          if (input[0] <= 4.700000047683716) {
              var115 = [0.0, 1.0, 0.0];
          } else {
              if (input[4] <= 83.55464172363281) {
                  var115 = [0.0, 1.0, 0.0];
              } else {
                  if (input[0] <= 9.021132469177246) {
                      var115 = [0.0, 0.0, 1.0];
                  } else {
                      var115 = [0.0, 1.0, 0.0];
                  }
              }
          }
      }
  } else {
      if (input[5] <= 129.8000030517578) {
          if (input[0] <= 23.949999809265137) {
              if (input[4] <= 92.0) {
                  if (input[0] <= 17.61653232574463) {
                      if (input[5] <= 108.20000076293945) {
                          if (input[0] <= 16.731764793395996) {
                              if (input[5] <= 94.09440994262695) {
                                  var115 = [0.20833333333333334, 0.0, 0.7916666666666666];
                              } else {
                                  var115 = [0.8333333333333334, 0.0, 0.16666666666666666];
                              }
                          } else {
                              if (input[5] <= 39.56513214111328) {
                                  var115 = [1.0, 0.0, 0.0];
                              } else {
                                  var115 = [0.5, 0.0, 0.5];
                              }
                          }
                      } else {
                          var115 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[4] <= 91.09317016601562) {
                          if (input[0] <= 18.550000190734863) {
                              if (input[4] <= 89.94999694824219) {
                                  var115 = [0.0, 0.0, 1.0];
                              } else {
                                  var115 = [0.2, 0.0, 0.8];
                              }
                          } else {
                              if (input[1] <= 50.5) {
                                  var115 = [0.0, 0.0, 1.0];
                              } else {
                                  var115 = [0.14285714285714285, 0.0, 0.8571428571428571];
                              }
                          }
                      } else {
                          if (input[1] <= 45.5) {
                              if (input[1] <= 39.0) {
                                  var115 = [0.5333333333333333, 0.0, 0.4666666666666667];
                              } else {
                                  var115 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[4] <= 91.67840957641602) {
                                  var115 = [0.875, 0.0, 0.125];
                              } else {
                                  var115 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              } else {
                  var115 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[1] <= 39.0) {
                  var115 = [1.0, 0.0, 0.0];
              } else {
                  if (input[5] <= 76.25000190734863) {
                      var115 = [0.0, 0.0, 1.0];
                  } else {
                      var115 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[4] <= 91.64999771118164) {
              if (input[2] <= 3.799999952316284) {
                  if (input[4] <= 91.54999923706055) {
                      if (input[2] <= 2.2462528944015503) {
                          var115 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[1] <= 57.0) {
                              if (input[0] <= 16.922080039978027) {
                                  var115 = [0.75, 0.0, 0.25];
                              } else {
                                  var115 = [0.08333333333333333, 0.0, 0.9166666666666666];
                              }
                          } else {
                              if (input[4] <= 89.16718673706055) {
                                  var115 = [0.0, 0.0, 1.0];
                              } else {
                                  var115 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      if (input[0] <= 20.699999809265137) {
                          var115 = [0.0, 0.0, 1.0];
                      } else {
                          var115 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  var115 = [1.0, 0.0, 0.0];
              }
          } else {
              var115 = [1.0, 0.0, 0.0];
          }
      }
  }
  var85 = addVec(var86, var115);
  let var116: HazardVector = [0, 0, 0];
  if (input[5] <= 26.69035530090332) {
      if (input[5] <= 16.035583972930908) {
          if (input[4] <= 84.58483505249023) {
              if (input[1] <= 73.0) {
                  var116 = [0.0, 1.0, 0.0];
              } else {
                  if (input[0] <= 6.5137856006622314) {
                      var116 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[4] <= 83.3826904296875) {
                          var116 = [0.0, 0.0, 1.0];
                      } else {
                          var116 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[4] <= 84.86700820922852) {
                  if (input[0] <= 11.108029842376709) {
                      var116 = [0.0, 0.0, 1.0];
                  } else {
                      var116 = [0.0, 1.0, 0.0];
                  }
              } else {
                  var116 = [0.0, 0.0, 1.0];
              }
          }
      } else {
          if (input[1] <= 38.5) {
              if (input[2] <= 6.3823466300964355) {
                  if (input[5] <= 23.77369213104248) {
                      var116 = [0.0, 1.0, 0.0];
                  } else {
                      var116 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var116 = [0.0, 1.0, 0.0];
              }
          } else {
              if (input[0] <= 13.349999904632568) {
                  if (input[5] <= 19.327978134155273) {
                      if (input[2] <= 5.150000095367432) {
                          var116 = [0.0, 0.0, 1.0];
                      } else {
                          var116 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[1] <= 65.0) {
                          if (input[0] <= 6.564395189285278) {
                              var116 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[0] <= 9.710693359375) {
                                  var116 = [0.0, 0.0, 1.0];
                              } else {
                                  var116 = [0.0, 1.0, 0.0];
                              }
                          }
                      } else {
                          var116 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  if (input[4] <= 80.83346557617188) {
                      var116 = [0.0, 1.0, 0.0];
                  } else {
                      var116 = [0.0, 0.0, 1.0];
                  }
              }
          }
      }
  } else {
      if (input[0] <= 23.45557689666748) {
          if (input[1] <= 68.5) {
              if (input[5] <= 33.04999923706055) {
                  if (input[2] <= 3.549999952316284) {
                      if (input[5] <= 30.59662628173828) {
                          var116 = [0.0, 1.0, 0.0];
                      } else {
                          var116 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var116 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[4] <= 92.0) {
                      if (input[2] <= 3.959672212600708) {
                          if (input[0] <= 16.5) {
                              if (input[2] <= 3.5474252700805664) {
                                  var116 = [0.25, 0.0, 0.75];
                              } else {
                                  var116 = [0.8, 0.0, 0.2];
                              }
                          } else {
                              if (input[2] <= 2.9503875970840454) {
                                  var116 = [0.09259259259259259, 0.0, 0.9074074074074074];
                              } else {
                                  var116 = [0.0, 0.24, 0.76];
                              }
                          }
                      } else {
                          if (input[5] <= 129.8000030517578) {
                              if (input[5] <= 109.06250762939453) {
                                  var116 = [0.527027027027027, 0.14864864864864866, 0.32432432432432434];
                              } else {
                                  var116 = [0.07142857142857142, 0.0, 0.9285714285714286];
                              }
                          } else {
                              if (input[4] <= 90.56674194335938) {
                                  var116 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              } else {
                                  var116 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      var116 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[5] <= 81.29999923706055) {
                  if (input[4] <= 83.3499984741211) {
                      var116 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[5] <= 30.649999618530273) {
                          var116 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 50.05000114440918) {
                              var116 = [1.0, 0.0, 0.0];
                          } else {
                              var116 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  if (input[4] <= 91.70000076293945) {
                      if (input[2] <= 2.0) {
                          var116 = [0.0, 0.0, 1.0];
                      } else {
                          var116 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var116 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[4] <= 89.85823440551758) {
              if (input[4] <= 85.25) {
                  var116 = [0.0, 1.0, 0.0];
              } else {
                  var116 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[2] <= 2.0) {
                  if (input[1] <= 41.0) {
                      var116 = [1.0, 0.0, 0.0];
                  } else {
                      var116 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var116 = [1.0, 0.0, 0.0];
              }
          }
      }
  }
  var84 = addVec(var85, var116);
  let var117: HazardVector = [0, 0, 0];
  if (input[0] <= 15.187127113342285) {
      if (input[4] <= 84.72245788574219) {
          if (input[4] <= 84.11833572387695) {
              var117 = [0.0, 1.0, 0.0];
          } else {
              if (input[1] <= 50.0) {
                  var117 = [0.0, 1.0, 0.0];
              } else {
                  if (input[4] <= 84.6053695678711) {
                      if (input[0] <= 4.950000047683716) {
                          var117 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[1] <= 71.0) {
                              var117 = [0.0, 1.0, 0.0];
                          } else {
                              var117 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      var117 = [0.0, 0.0, 1.0];
                  }
              }
          }
      } else {
          if (input[1] <= 24.5) {
              var117 = [0.0, 1.0, 0.0];
          } else {
              if (input[4] <= 88.55000305175781) {
                  if (input[4] <= 86.02579116821289) {
                      if (input[4] <= 85.34175109863281) {
                          if (input[2] <= 5.013831853866577) {
                              var117 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[2] <= 5.975518703460693) {
                                  var117 = [0.0, 1.0, 0.0];
                              } else {
                                  var117 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[2] <= 6.224472761154175) {
                              var117 = [0.0, 0.0, 1.0];
                          } else {
                              var117 = [0.0, 1.0, 0.0];
                          }
                      }
                  } else {
                      if (input[4] <= 87.16442489624023) {
                          var117 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[2] <= 5.632672309875488) {
                              var117 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[1] <= 45.5) {
                                  var117 = [1.0, 0.0, 0.0];
                              } else {
                                  var117 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[0] <= 12.75) {
                      if (input[4] <= 90.20000076293945) {
                          if (input[4] <= 89.89999771118164) {
                              var117 = [1.0, 0.0, 0.0];
                          } else {
                              var117 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var117 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[4] <= 90.97256469726562) {
                          if (input[4] <= 89.45000076293945) {
                              var117 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[1] <= 41.0) {
                                  var117 = [0.0, 0.0, 1.0];
                              } else {
                                  var117 = [0.36363636363636365, 0.0, 0.6363636363636364];
                              }
                          }
                      } else {
                          if (input[1] <= 60.5) {
                              var117 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[5] <= 202.89999389648438) {
                                  var117 = [0.0, 0.0, 1.0];
                              } else {
                                  var117 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              }
          }
      }
  } else {
      if (input[4] <= 91.95000076293945) {
          if (input[2] <= 4.367210865020752) {
              if (input[0] <= 24.2997465133667) {
                  if (input[1] <= 67.5) {
                      if (input[4] <= 82.05581665039062) {
                          var117 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[1] <= 54.5) {
                              if (input[4] <= 91.09317016601562) {
                                  var117 = [0.0, 0.0, 1.0];
                              } else {
                                  var117 = [0.28846153846153844, 0.0, 0.7115384615384616];
                              }
                          } else {
                              if (input[1] <= 64.5) {
                                  var117 = [0.0, 0.0, 1.0];
                              } else {
                                  var117 = [0.14285714285714285, 0.0, 0.8571428571428571];
                              }
                          }
                      }
                  } else {
                      var117 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[0] <= 24.804701805114746) {
                      if (input[4] <= 90.8499984741211) {
                          var117 = [0.0, 0.0, 1.0];
                      } else {
                          var117 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[4] <= 85.25) {
                          var117 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[5] <= 215.0) {
                              var117 = [1.0, 0.0, 0.0];
                          } else {
                              var117 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              }
          } else {
              if (input[2] <= 4.4929869174957275) {
                  var117 = [0.0, 1.0, 0.0];
              } else {
                  if (input[5] <= 70.7647590637207) {
                      if (input[4] <= 83.43782043457031) {
                          var117 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[4] <= 89.04999923706055) {
                              var117 = [0.0, 0.0, 1.0];
                          } else {
                              var117 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[4] <= 90.73479080200195) {
                          if (input[0] <= 18.906270027160645) {
                              if (input[0] <= 17.25) {
                                  var117 = [0.0, 0.0, 1.0];
                              } else {
                                  var117 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var117 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[5] <= 125.39999771118164) {
                              if (input[2] <= 5.150000095367432) {
                                  var117 = [1.0, 0.0, 0.0];
                              } else {
                                  var117 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var117 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          }
      } else {
          var117 = [1.0, 0.0, 0.0];
      }
  }
  var83 = addVec(var84, var117);
  let var118: HazardVector = [0, 0, 0];
  if (input[4] <= 84.72245788574219) {
      if (input[2] <= 7.796332597732544) {
          if (input[1] <= 73.5) {
              if (input[0] <= 4.566897630691528) {
                  var118 = [0.0, 0.0, 1.0];
              } else {
                  if (input[5] <= 70.07344436645508) {
                      var118 = [0.0, 1.0, 0.0];
                  } else {
                      var118 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[5] <= 3.386118173599243) {
                  if (input[1] <= 82.5) {
                      var118 = [0.0, 0.0, 1.0];
                  } else {
                      var118 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[4] <= 82.52257919311523) {
                      var118 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[2] <= 2.8525681495666504) {
                          var118 = [0.0, 1.0, 0.0];
                      } else {
                          var118 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          }
      } else {
          if (input[4] <= 84.6600227355957) {
              var118 = [0.0, 0.0, 1.0];
          } else {
              var118 = [0.0, 1.0, 0.0];
          }
      }
  } else {
      if (input[0] <= 23.84999942779541) {
          if (input[1] <= 21.5) {
              if (input[4] <= 89.1500015258789) {
                  var118 = [0.0, 1.0, 0.0];
              } else {
                  var118 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[0] <= 19.188952445983887) {
                  if (input[2] <= 5.369261980056763) {
                      if (input[4] <= 91.04999923706055) {
                          if (input[0] <= 14.799999713897705) {
                              if (input[4] <= 88.75) {
                                  var118 = [0.0, 0.03636363636363636, 0.9636363636363636];
                              } else {
                                  var118 = [0.3076923076923077, 0.0, 0.6923076923076923];
                              }
                          } else {
                              if (input[0] <= 16.299132347106934) {
                                  var118 = [0.047619047619047616, 0.0, 0.9523809523809523];
                              } else {
                                  var118 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[5] <= 204.1999969482422) {
                              if (input[0] <= 15.549999713897705) {
                                  var118 = [1.0, 0.0, 0.0];
                              } else {
                                  var118 = [0.7708333333333334, 0.0, 0.22916666666666666];
                              }
                          } else {
                              var118 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[5] <= 130.9000015258789) {
                          if (input[4] <= 88.47683715820312) {
                              if (input[1] <= 49.0) {
                                  var118 = [0.0, 0.0, 1.0];
                              } else {
                                  var118 = [0.0, 0.6666666666666666, 0.3333333333333333];
                              }
                          } else {
                              if (input[5] <= 124.25) {
                                  var118 = [0.8387096774193549, 0.0, 0.16129032258064516];
                              } else {
                                  var118 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          var118 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[5] <= 129.8000030517578) {
                      if (input[1] <= 45.5) {
                          if (input[2] <= 3.851846218109131) {
                              if (input[5] <= 110.54047393798828) {
                                  var118 = [0.07142857142857142, 0.0, 0.9285714285714286];
                              } else {
                                  var118 = [0.2727272727272727, 0.0, 0.7272727272727273];
                              }
                          } else {
                              if (input[0] <= 19.88665199279785) {
                                  var118 = [0.7142857142857143, 0.0, 0.2857142857142857];
                              } else {
                                  var118 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[4] <= 90.06194686889648) {
                              var118 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[5] <= 84.89999771118164) {
                                  var118 = [0.0, 0.0, 1.0];
                              } else {
                                  var118 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      if (input[1] <= 44.0) {
                          var118 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[1] <= 57.5) {
                              if (input[5] <= 239.75) {
                                  var118 = [1.0, 0.0, 0.0];
                              } else {
                                  var118 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[5] <= 241.75) {
                                  var118 = [1.0, 0.0, 0.0];
                              } else {
                                  var118 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              }
          }
      } else {
          if (input[5] <= 242.75) {
              if (input[5] <= 56.14999961853027) {
                  if (input[5] <= 50.35000038146973) {
                      var118 = [1.0, 0.0, 0.0];
                  } else {
                      var118 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var118 = [1.0, 0.0, 0.0];
              }
          } else {
              var118 = [0.0, 0.0, 1.0];
          }
      }
  }
  var82 = addVec(var83, var118);
  let var119: HazardVector = [0, 0, 0];
  if (input[0] <= 15.096360206604004) {
      if (input[0] <= 7.454452276229858) {
          if (input[5] <= 27.10390567779541) {
              if (input[0] <= 4.580510377883911) {
                  var119 = [0.0, 0.0, 1.0];
              } else {
                  if (input[1] <= 78.5) {
                      if (input[2] <= 6.307992696762085) {
                          var119 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[2] <= 7.152220010757446) {
                              var119 = [0.0, 0.0, 1.0];
                          } else {
                              var119 = [0.0, 1.0, 0.0];
                          }
                      }
                  } else {
                      if (input[1] <= 79.5) {
                          var119 = [1.0, 0.0, 0.0];
                      } else {
                          var119 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          } else {
              var119 = [0.0, 0.0, 1.0];
          }
      } else {
          if (input[1] <= 53.5) {
              if (input[0] <= 12.490628242492676) {
                  if (input[5] <= 15.023857116699219) {
                      if (input[2] <= 7.153351068496704) {
                          if (input[0] <= 12.051507949829102) {
                              if (input[1] <= 44.5) {
                                  var119 = [0.0, 0.5454545454545454, 0.45454545454545453];
                              } else {
                                  var119 = [0.0, 1.0, 0.0];
                              }
                          } else {
                              if (input[5] <= 7.313261985778809) {
                                  var119 = [0.0, 1.0, 0.0];
                              } else {
                                  var119 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          var119 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[1] <= 45.5) {
                          if (input[4] <= 86.75) {
                              if (input[2] <= 5.676400423049927) {
                                  var119 = [0.0, 0.0, 1.0];
                              } else {
                                  var119 = [0.0, 1.0, 0.0];
                              }
                          } else {
                              if (input[1] <= 31.5) {
                                  var119 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              } else {
                                  var119 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[2] <= 5.7493040561676025) {
                              var119 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[5] <= 35.55000019073486) {
                                  var119 = [1.0, 0.0, 0.0];
                              } else {
                                  var119 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[4] <= 86.29050827026367) {
                      var119 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[2] <= 1.8354220986366272) {
                          if (input[5] <= 42.5842170715332) {
                              var119 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[0] <= 14.184216976165771) {
                                  var119 = [0.0, 0.0, 1.0];
                              } else {
                                  var119 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[1] <= 27.5) {
                              var119 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[2] <= 2.7718982696533203) {
                                  var119 = [0.2, 0.0, 0.8];
                              } else {
                                  var119 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              }
          } else {
              if (input[2] <= 2.114012360572815) {
                  var119 = [0.0, 0.0, 1.0];
              } else {
                  if (input[5] <= 70.07895088195801) {
                      if (input[5] <= 6.421151876449585) {
                          var119 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 27.711444854736328) {
                              var119 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[2] <= 4.002249240875244) {
                                  var119 = [0.2, 0.0, 0.8];
                              } else {
                                  var119 = [0.0, 0.8461538461538461, 0.15384615384615385];
                              }
                          }
                      }
                  } else {
                      if (input[1] <= 71.5) {
                          if (input[5] <= 129.8000030517578) {
                              if (input[5] <= 111.70000076293945) {
                                  var119 = [1.0, 0.0, 0.0];
                              } else {
                                  var119 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[2] <= 5.366742849349976) {
                                  var119 = [0.6, 0.0, 0.4];
                              } else {
                                  var119 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[2] <= 3.799999952316284) {
                              if (input[0] <= 11.849999904632568) {
                                  var119 = [1.0, 0.0, 0.0];
                              } else {
                                  var119 = [0.5, 0.0, 0.5];
                              }
                          } else {
                              var119 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          }
      }
  } else {
      if (input[4] <= 91.95000076293945) {
          if (input[2] <= 4.367210865020752) {
              if (input[0] <= 23.667651176452637) {
                  if (input[4] <= 82.52557754516602) {
                      var119 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[2] <= 3.9587196111679077) {
                          if (input[5] <= 131.34197235107422) {
                              if (input[0] <= 18.184471130371094) {
                                  var119 = [0.0, 0.0, 1.0];
                              } else {
                                  var119 = [0.029411764705882353, 0.0, 0.9705882352941176];
                              }
                          } else {
                              if (input[1] <= 34.5) {
                                  var119 = [1.0, 0.0, 0.0];
                              } else {
                                  var119 = [0.02564102564102564, 0.0, 0.9743589743589743];
                              }
                          }
                      } else {
                          if (input[0] <= 17.850000381469727) {
                              if (input[1] <= 49.5) {
                                  var119 = [0.0, 0.0, 1.0];
                              } else {
                                  var119 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[2] <= 4.02163290977478) {
                                  var119 = [0.3333333333333333, 0.0, 0.6666666666666666];
                              } else {
                                  var119 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[0] <= 26.50969123840332) {
                      if (input[1] <= 29.0) {
                          var119 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 56.14999961853027) {
                              var119 = [0.0, 0.0, 1.0];
                          } else {
                              var119 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[4] <= 85.25) {
                          var119 = [0.0, 1.0, 0.0];
                      } else {
                          var119 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          } else {
              if (input[2] <= 5.736835479736328) {
                  if (input[4] <= 89.9677963256836) {
                      if (input[4] <= 83.92634963989258) {
                          var119 = [0.0, 1.0, 0.0];
                      } else {
                          var119 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[1] <= 40.5) {
                          var119 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[4] <= 90.48479080200195) {
                              var119 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[5] <= 102.54999923706055) {
                                  var119 = [1.0, 0.0, 0.0];
                              } else {
                                  var119 = [0.5555555555555556, 0.0, 0.4444444444444444];
                              }
                          }
                      }
                  }
              } else {
                  if (input[2] <= 7.1499998569488525) {
                      if (input[0] <= 19.868258476257324) {
                          if (input[1] <= 57.5) {
                              if (input[1] <= 33.0) {
                                  var119 = [0.2, 0.0, 0.8];
                              } else {
                                  var119 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var119 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          var119 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      var119 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          var119 = [1.0, 0.0, 0.0];
      }
  }
  var81 = addVec(var82, var119);
  let var120: HazardVector = [0, 0, 0];
  if (input[0] <= 14.209258556365967) {
      if (input[0] <= 6.670615196228027) {
          if (input[4] <= 84.64999771118164) {
              if (input[5] <= 26.992615699768066) {
                  var120 = [0.0, 1.0, 0.0];
              } else {
                  var120 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[5] <= 26.28181552886963) {
                  if (input[5] <= 22.8131160736084) {
                      var120 = [0.0, 0.0, 1.0];
                  } else {
                      var120 = [0.0, 1.0, 0.0];
                  }
              } else {
                  var120 = [0.0, 0.0, 1.0];
              }
          }
      } else {
          if (input[5] <= 9.400000095367432) {
              if (input[4] <= 84.65357971191406) {
                  if (input[2] <= 7.233466386795044) {
                      if (input[1] <= 72.0) {
                          var120 = [0.0, 1.0, 0.0];
                      } else {
                          var120 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var120 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[2] <= 5.411686897277832) {
                      if (input[5] <= 7.3999998569488525) {
                          var120 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[2] <= 2.899999976158142) {
                              var120 = [0.0, 0.0, 1.0];
                          } else {
                              var120 = [0.0, 1.0, 0.0];
                          }
                      }
                  } else {
                      var120 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[4] <= 84.57786560058594) {
                  var120 = [0.0, 1.0, 0.0];
              } else {
                  if (input[4] <= 89.1171875) {
                      if (input[2] <= 5.7493040561676025) {
                          var120 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[1] <= 45.5) {
                              var120 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[2] <= 6.025541543960571) {
                                  var120 = [0.0, 0.0, 1.0];
                              } else {
                                  var120 = [0.14285714285714285, 0.14285714285714285, 0.7142857142857143];
                              }
                          }
                      }
                  } else {
                      if (input[0] <= 12.849999904632568) {
                          var120 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[5] <= 87.17689895629883) {
                              if (input[2] <= 3.09742534160614) {
                                  var120 = [1.0, 0.0, 0.0];
                              } else {
                                  var120 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var120 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              }
          }
      }
  } else {
      if (input[2] <= 3.977606415748596) {
          if (input[5] <= 129.8000030517578) {
              if (input[2] <= 2.6346936225891113) {
                  if (input[0] <= 24.699999809265137) {
                      if (input[4] <= 91.8627700805664) {
                          if (input[4] <= 91.09317016601562) {
                              var120 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[0] <= 19.173057556152344) {
                                  var120 = [1.0, 0.0, 0.0];
                              } else {
                                  var120 = [0.08333333333333333, 0.0, 0.9166666666666666];
                              }
                          }
                      } else {
                          var120 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var120 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[2] <= 2.7124160528182983) {
                      if (input[4] <= 84.94540023803711) {
                          var120 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[0] <= 18.800000190734863) {
                              if (input[5] <= 78.14999961853027) {
                                  var120 = [0.0, 0.0, 1.0];
                              } else {
                                  var120 = [0.3333333333333333, 0.0, 0.6666666666666666];
                              }
                          } else {
                              if (input[1] <= 34.0) {
                                  var120 = [0.3333333333333333, 0.0, 0.6666666666666666];
                              } else {
                                  var120 = [0.9285714285714286, 0.0, 0.07142857142857142];
                              }
                          }
                      }
                  } else {
                      if (input[4] <= 83.95775985717773) {
                          var120 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[1] <= 24.5) {
                              var120 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[0] <= 24.399999618530273) {
                                  var120 = [0.14457831325301204, 0.012048192771084338, 0.8433734939759037];
                              } else {
                                  var120 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              }
          } else {
              if (input[0] <= 20.550000190734863) {
                  if (input[1] <= 51.5) {
                      if (input[4] <= 91.0808334350586) {
                          var120 = [0.0, 0.0, 1.0];
                      } else {
                          var120 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var120 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[1] <= 42.0) {
                      var120 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[2] <= 2.7306089401245117) {
                          var120 = [1.0, 0.0, 0.0];
                      } else {
                          var120 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          }
      } else {
          if (input[5] <= 85.0576286315918) {
              if (input[0] <= 18.907047271728516) {
                  if (input[5] <= 8.66327965259552) {
                      var120 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[5] <= 33.04999923706055) {
                          if (input[4] <= 90.29999923706055) {
                              var120 = [0.0, 0.0, 1.0];
                          } else {
                              var120 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[1] <= 28.5) {
                              var120 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[1] <= 32.5) {
                                  var120 = [0.0, 1.0, 0.0];
                              } else {
                                  var120 = [0.6, 0.0, 0.4];
                              }
                          }
                      }
                  }
              } else {
                  if (input[5] <= 66.14926338195801) {
                      if (input[4] <= 86.77634811401367) {
                          var120 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[5] <= 42.45000076293945) {
                              var120 = [0.0, 0.0, 1.0];
                          } else {
                              var120 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[4] <= 90.31885147094727) {
                          var120 = [0.0, 0.0, 1.0];
                      } else {
                          var120 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[1] <= 43.5) {
                  var120 = [1.0, 0.0, 0.0];
              } else {
                  if (input[5] <= 133.5975341796875) {
                      if (input[4] <= 91.92840957641602) {
                          if (input[0] <= 19.618185997009277) {
                              if (input[2] <= 5.282783508300781) {
                                  var120 = [0.0, 0.0, 1.0];
                              } else {
                                  var120 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[2] <= 4.450000047683716) {
                                  var120 = [1.0, 0.0, 0.0];
                              } else {
                                  var120 = [0.8333333333333334, 0.0, 0.16666666666666666];
                              }
                          }
                      } else {
                          var120 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var120 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  }
  var80 = addVec(var81, var120);
  let var121: HazardVector = [0, 0, 0];
  if (input[5] <= 72.20000076293945) {
      if (input[5] <= 12.682912349700928) {
          if (input[4] <= 84.67908096313477) {
              if (input[0] <= 8.296509742736816) {
                  if (input[2] <= 7.68346643447876) {
                      var121 = [0.0, 1.0, 0.0];
                  } else {
                      var121 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var121 = [0.0, 1.0, 0.0];
              }
          } else {
              if (input[5] <= 9.542841911315918) {
                  var121 = [0.0, 0.0, 1.0];
              } else {
                  if (input[0] <= 13.403247833251953) {
                      var121 = [0.0, 0.0, 1.0];
                  } else {
                      var121 = [0.0, 1.0, 0.0];
                  }
              }
          }
      } else {
          if (input[4] <= 84.6109504699707) {
              if (input[4] <= 83.91212463378906) {
                  var121 = [0.0, 1.0, 0.0];
              } else {
                  if (input[5] <= 26.800000190734863) {
                      var121 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[5] <= 29.921005249023438) {
                          var121 = [0.0, 0.0, 1.0];
                      } else {
                          var121 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[4] <= 90.70000076293945) {
                  if (input[1] <= 23.0) {
                      var121 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[4] <= 86.10000228881836) {
                          if (input[0] <= 5.665174245834351) {
                              var121 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[2] <= 4.954414367675781) {
                                  var121 = [0.0, 0.0, 1.0];
                              } else {
                                  var121 = [0.0, 0.6, 0.4];
                              }
                          }
                      } else {
                          if (input[2] <= 7.400000095367432) {
                              if (input[5] <= 60.94999885559082) {
                                  var121 = [0.05128205128205128, 0.0, 0.9487179487179487];
                              } else {
                                  var121 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var121 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  if (input[5] <= 39.900001525878906) {
                      if (input[2] <= 3.799999952316284) {
                          var121 = [0.0, 0.0, 1.0];
                      } else {
                          var121 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var121 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  } else {
      if (input[4] <= 91.95000076293945) {
          if (input[4] <= 91.09317016601562) {
              if (input[1] <= 70.0) {
                  if (input[2] <= 5.366742849349976) {
                      if (input[5] <= 279.8999938964844) {
                          if (input[1] <= 40.5) {
                              var121 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[5] <= 98.25) {
                                  var121 = [0.08695652173913043, 0.0, 0.9130434782608695];
                              } else {
                                  var121 = [0.02127659574468085, 0.0, 0.9787234042553191];
                              }
                          }
                      } else {
                          var121 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[0] <= 14.149999618530273) {
                          var121 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 104.06520080566406) {
                              var121 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[4] <= 89.57288360595703) {
                                  var121 = [1.0, 0.0, 0.0];
                              } else {
                                  var121 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[1] <= 74.5) {
                      var121 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[1] <= 83.0) {
                          if (input[2] <= 3.799999952316284) {
                              var121 = [0.0, 0.0, 1.0];
                          } else {
                              var121 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var121 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[2] <= 3.959672212600708) {
                  if (input[1] <= 37.5) {
                      if (input[5] <= 116.6500015258789) {
                          if (input[4] <= 91.45000076293945) {
                              var121 = [0.0, 0.0, 1.0];
                          } else {
                              var121 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var121 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[5] <= 106.29999923706055) {
                          if (input[2] <= 1.7356416583061218) {
                              var121 = [0.0, 0.0, 1.0];
                          } else {
                              var121 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[1] <= 40.0) {
                              var121 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[5] <= 122.20000457763672) {
                                  var121 = [0.0, 0.0, 1.0];
                              } else {
                                  var121 = [0.38461538461538464, 0.0, 0.6153846153846154];
                              }
                          }
                      }
                  }
              } else {
                  if (input[1] <= 41.5) {
                      var121 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[1] <= 45.0) {
                          if (input[4] <= 91.43941879272461) {
                              var121 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[2] <= 4.108978986740112) {
                                  var121 = [1.0, 0.0, 0.0];
                              } else {
                                  var121 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          var121 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      } else {
          var121 = [1.0, 0.0, 0.0];
      }
  }
  var79 = addVec(var80, var121);
  let var122: HazardVector = [0, 0, 0];
  if (input[4] <= 85.92582321166992) {
      if (input[5] <= 71.57751846313477) {
          if (input[5] <= 22.319673538208008) {
              if (input[4] <= 84.72171020507812) {
                  if (input[4] <= 84.56731033325195) {
                      if (input[2] <= 1.8614205718040466) {
                          if (input[0] <= 13.02065896987915) {
                              var122 = [0.0, 1.0, 0.0];
                          } else {
                              var122 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var122 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      if (input[1] <= 49.5) {
                          var122 = [0.0, 1.0, 0.0];
                      } else {
                          var122 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  if (input[2] <= 6.561686992645264) {
                      if (input[1] <= 61.0) {
                          var122 = [0.0, 1.0, 0.0];
                      } else {
                          var122 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var122 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[5] <= 33.57086181640625) {
                  if (input[2] <= 8.015865802764893) {
                      if (input[4] <= 83.77507400512695) {
                          var122 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[1] <= 59.5) {
                              var122 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[5] <= 26.724431037902832) {
                                  var122 = [0.0, 0.75, 0.25];
                              } else {
                                  var122 = [0.0, 0.14285714285714285, 0.8571428571428571];
                              }
                          }
                      }
                  } else {
                      var122 = [0.0, 1.0, 0.0];
                  }
              } else {
                  var122 = [0.0, 1.0, 0.0];
              }
          }
      } else {
          var122 = [0.0, 0.0, 1.0];
      }
  } else {
      if (input[0] <= 23.84999942779541) {
          if (input[1] <= 63.5) {
              if (input[0] <= 18.184471130371094) {
                  if (input[2] <= 5.2750091552734375) {
                      if (input[5] <= 31.84999942779541) {
                          var122 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[1] <= 43.5) {
                              if (input[2] <= 1.0999999642372131) {
                                  var122 = [1.0, 0.0, 0.0];
                              } else {
                                  var122 = [0.36363636363636365, 0.0, 0.6363636363636364];
                              }
                          } else {
                              if (input[4] <= 92.0) {
                                  var122 = [0.08888888888888889, 0.0, 0.9111111111111111];
                              } else {
                                  var122 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      if (input[1] <= 44.0) {
                          if (input[0] <= 12.400000095367432) {
                              var122 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[5] <= 44.0) {
                                  var122 = [0.3, 0.0, 0.7];
                              } else {
                                  var122 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[4] <= 89.79999923706055) {
                              if (input[4] <= 87.30284118652344) {
                                  var122 = [1.0, 0.0, 0.0];
                              } else {
                                  var122 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[0] <= 17.899999618530273) {
                                  var122 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              } else {
                                  var122 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[5] <= 90.6500015258789) {
                      if (input[0] <= 21.131898880004883) {
                          if (input[1] <= 56.0) {
                              if (input[5] <= 45.10000038146973) {
                                  var122 = [0.0, 0.0, 1.0];
                              } else {
                                  var122 = [0.9285714285714286, 0.0, 0.07142857142857142];
                              }
                          } else {
                              var122 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[4] <= 91.45000076293945) {
                              var122 = [0.0, 0.0, 1.0];
                          } else {
                              var122 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[2] <= 3.935365676879883) {
                          if (input[4] <= 91.75) {
                              if (input[2] <= 2.656408429145813) {
                                  var122 = [0.04878048780487805, 0.0, 0.9512195121951219];
                              } else {
                                  var122 = [0.2916666666666667, 0.0, 0.7083333333333334];
                              }
                          } else {
                              var122 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[0] <= 18.868185997009277) {
                              if (input[1] <= 43.0) {
                                  var122 = [1.0, 0.0, 0.0];
                              } else {
                                  var122 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[1] <= 41.5) {
                                  var122 = [1.0, 0.0, 0.0];
                              } else {
                                  var122 = [0.7727272727272727, 0.0, 0.22727272727272727];
                              }
                          }
                      }
                  }
              }
          } else {
              if (input[2] <= 2.127450466156006) {
                  var122 = [0.0, 0.0, 1.0];
              } else {
                  if (input[2] <= 3.8641246557235718) {
                      if (input[0] <= 13.099999904632568) {
                          var122 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[0] <= 16.30838632583618) {
                              if (input[2] <= 2.89067280292511) {
                                  var122 = [1.0, 0.0, 0.0];
                              } else {
                                  var122 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var122 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[0] <= 13.760508060455322) {
                          if (input[2] <= 5.116742849349976) {
                              var122 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[0] <= 13.160508155822754) {
                                  var122 = [1.0, 0.0, 0.0];
                              } else {
                                  var122 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          var122 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      } else {
          if (input[5] <= 56.14999961853027) {
              if (input[1] <= 38.5) {
                  var122 = [1.0, 0.0, 0.0];
              } else {
                  var122 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[4] <= 89.70000076293945) {
                  var122 = [0.0, 0.0, 1.0];
              } else {
                  var122 = [1.0, 0.0, 0.0];
              }
          }
      }
  }
  var78 = addVec(var79, var122);
  let var123: HazardVector = [0, 0, 0];
  if (input[0] <= 9.710797309875488) {
      if (input[5] <= 27.10390567779541) {
          if (input[2] <= 6.1884636878967285) {
              if (input[4] <= 84.77669143676758) {
                  if (input[4] <= 84.1406021118164) {
                      var123 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[1] <= 71.0) {
                          var123 = [0.0, 1.0, 0.0];
                      } else {
                          var123 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[4] <= 88.9000015258789) {
                      var123 = [0.0, 0.0, 1.0];
                  } else {
                      var123 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[0] <= 6.505453586578369) {
                  var123 = [0.0, 1.0, 0.0];
              } else {
                  if (input[0] <= 8.661449909210205) {
                      var123 = [0.0, 0.0, 1.0];
                  } else {
                      var123 = [0.0, 1.0, 0.0];
                  }
              }
          }
      } else {
          if (input[3] <= 0.10000000149011612) {
              if (input[4] <= 84.08902740478516) {
                  if (input[2] <= 6.567946434020996) {
                      var123 = [0.0, 1.0, 0.0];
                  } else {
                      var123 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var123 = [0.0, 0.0, 1.0];
              }
          } else {
              var123 = [1.0, 0.0, 0.0];
          }
      }
  } else {
      if (input[5] <= 74.35000228881836) {
          if (input[4] <= 84.87357711791992) {
              if (input[1] <= 36.5) {
                  if (input[2] <= 3.866213321685791) {
                      var123 = [0.0, 0.0, 1.0];
                  } else {
                      var123 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[2] <= 1.8503767251968384) {
                      var123 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[1] <= 72.0) {
                          var123 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[5] <= 27.5863516330719) {
                              var123 = [0.0, 0.0, 1.0];
                          } else {
                              var123 = [0.0, 1.0, 0.0];
                          }
                      }
                  }
              }
          } else {
              if (input[2] <= 3.5543198585510254) {
                  if (input[5] <= 57.79999923706055) {
                      if (input[5] <= 28.200000762939453) {
                          var123 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[4] <= 91.39402389526367) {
                              var123 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[2] <= 2.899999976158142) {
                                  var123 = [0.5, 0.0, 0.5];
                              } else {
                                  var123 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      var123 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[5] <= 23.15000057220459) {
                      if (input[4] <= 86.57582092285156) {
                          if (input[4] <= 85.80942153930664) {
                              var123 = [0.0, 1.0, 0.0];
                          } else {
                              var123 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var123 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[0] <= 11.150000095367432) {
                          var123 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[4] <= 89.25) {
                              var123 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[1] <= 37.5) {
                                  var123 = [0.5454545454545454, 0.0, 0.45454545454545453];
                              } else {
                                  var123 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              }
          }
      } else {
          if (input[0] <= 23.84999942779541) {
              if (input[2] <= 4.476953744888306) {
                  if (input[0] <= 17.300000190734863) {
                      if (input[0] <= 16.160194396972656) {
                          if (input[4] <= 90.33229064941406) {
                              if (input[2] <= 3.149999976158142) {
                                  var123 = [1.0, 0.0, 0.0];
                              } else {
                                  var123 = [0.5714285714285714, 0.0, 0.42857142857142855];
                              }
                          } else {
                              if (input[0] <= 14.25) {
                                  var123 = [0.5, 0.0, 0.5];
                              } else {
                                  var123 = [0.07692307692307693, 0.0, 0.9230769230769231];
                              }
                          }
                      } else {
                          if (input[2] <= 3.0712696313858032) {
                              if (input[2] <= 2.0) {
                                  var123 = [1.0, 0.0, 0.0];
                              } else {
                                  var123 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var123 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[4] <= 91.95000076293945) {
                          if (input[0] <= 19.15000057220459) {
                              if (input[0] <= 19.053467750549316) {
                                  var123 = [0.08823529411764706, 0.0, 0.9117647058823529];
                              } else {
                                  var123 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[1] <= 45.5) {
                                  var123 = [0.016666666666666666, 0.0, 0.9833333333333333];
                              } else {
                                  var123 = [0.16, 0.0, 0.84];
                              }
                          }
                      } else {
                          var123 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[4] <= 91.04999923706055) {
                      if (input[5] <= 142.12287139892578) {
                          if (input[0] <= 17.25) {
                              if (input[4] <= 89.0999984741211) {
                                  var123 = [1.0, 0.0, 0.0];
                              } else {
                                  var123 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[1] <= 56.5) {
                                  var123 = [0.7777777777777778, 0.0, 0.2222222222222222];
                              } else {
                                  var123 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          var123 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[0] <= 18.100000381469727) {
                          if (input[2] <= 5.6000001430511475) {
                              if (input[1] <= 52.5) {
                                  var123 = [0.75, 0.0, 0.25];
                              } else {
                                  var123 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var123 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var123 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              var123 = [1.0, 0.0, 0.0];
          }
      }
  }
  var77 = addVec(var78, var123);
  let var124: HazardVector = [0, 0, 0];
  if (input[1] <= 66.5) {
      if (input[0] <= 15.449999809265137) {
          if (input[5] <= 25.951984405517578) {
              if (input[4] <= 84.58483505249023) {
                  var124 = [0.0, 1.0, 0.0];
              } else {
                  if (input[0] <= 6.528637886047363) {
                      var124 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[1] <= 36.5) {
                          if (input[1] <= 32.5) {
                              if (input[5] <= 19.019916534423828) {
                                  var124 = [0.0, 1.0, 0.0];
                              } else {
                                  var124 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[5] <= 11.949999570846558) {
                                  var124 = [0.0, 0.0, 1.0];
                              } else {
                                  var124 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[0] <= 12.589505195617676) {
                              if (input[2] <= 5.2750091552734375) {
                                  var124 = [0.0, 0.0, 1.0];
                              } else {
                                  var124 = [0.16666666666666666, 0.0, 0.8333333333333334];
                              }
                          } else {
                              if (input[4] <= 86.25) {
                                  var124 = [0.0, 1.0, 0.0];
                              } else {
                                  var124 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              }
          } else {
              if (input[0] <= 11.150000095367432) {
                  if (input[1] <= 60.5) {
                      var124 = [0.0, 0.0, 1.0];
                  } else {
                      var124 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[2] <= 5.632672309875488) {
                      if (input[1] <= 63.5) {
                          if (input[5] <= 49.62447929382324) {
                              if (input[4] <= 90.75571060180664) {
                                  var124 = [0.1111111111111111, 0.0, 0.8888888888888888];
                              } else {
                                  var124 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[0] <= 13.816159725189209) {
                                  var124 = [0.0, 0.0, 1.0];
                              } else {
                                  var124 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              }
                          }
                      } else {
                          if (input[0] <= 14.188986778259277) {
                              if (input[4] <= 91.22256469726562) {
                                  var124 = [0.0, 0.0, 1.0];
                              } else {
                                  var124 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var124 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[0] <= 12.069316864013672) {
                          var124 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[0] <= 13.86473035812378) {
                              var124 = [0.0, 1.0, 0.0];
                          } else {
                              var124 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          }
      } else {
          if (input[4] <= 91.69386672973633) {
              if (input[4] <= 83.0579719543457) {
                  var124 = [0.0, 1.0, 0.0];
              } else {
                  if (input[5] <= 90.6500015258789) {
                      if (input[4] <= 91.06366348266602) {
                          if (input[0] <= 16.612709999084473) {
                              if (input[1] <= 49.5) {
                                  var124 = [0.0, 0.0, 1.0];
                              } else {
                                  var124 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var124 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[1] <= 33.0) {
                              var124 = [1.0, 0.0, 0.0];
                          } else {
                              var124 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[1] <= 30.5) {
                          if (input[4] <= 91.14999771118164) {
                              if (input[0] <= 19.581995964050293) {
                                  var124 = [1.0, 0.0, 0.0];
                              } else {
                                  var124 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var124 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[4] <= 91.09317016601562) {
                              if (input[1] <= 50.0) {
                                  var124 = [0.03333333333333333, 0.0, 0.9666666666666667];
                              } else {
                                  var124 = [0.47058823529411764, 0.0, 0.5294117647058824];
                              }
                          } else {
                              if (input[4] <= 91.54999923706055) {
                                  var124 = [0.6818181818181818, 0.0, 0.3181818181818182];
                              } else {
                                  var124 = [0.21212121212121213, 0.0, 0.7878787878787878];
                              }
                          }
                      }
                  }
              }
          } else {
              if (input[5] <= 114.85000228881836) {
                  if (input[1] <= 43.5) {
                      var124 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[4] <= 92.0) {
                          if (input[5] <= 79.79841613769531) {
                              var124 = [1.0, 0.0, 0.0];
                          } else {
                              var124 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var124 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  var124 = [1.0, 0.0, 0.0];
              }
          }
      }
  } else {
      if (input[1] <= 85.0) {
          if (input[2] <= 7.1499998569488525) {
              if (input[0] <= 9.668739795684814) {
                  if (input[0] <= 4.580510377883911) {
                      var124 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[4] <= 84.14999771118164) {
                          var124 = [0.0, 1.0, 0.0];
                      } else {
                          var124 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[5] <= 78.37344360351562) {
                      if (input[0] <= 14.596850872039795) {
                          if (input[4] <= 66.93979263305664) {
                              var124 = [0.0, 1.0, 0.0];
                          } else {
                              var124 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var124 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      if (input[5] <= 94.5) {
                          var124 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 147.8499984741211) {
                              var124 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[1] <= 78.0) {
                                  var124 = [1.0, 0.0, 0.0];
                              } else {
                                  var124 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              }
          } else {
              var124 = [1.0, 0.0, 0.0];
          }
      } else {
          if (input[5] <= 125.39999771118164) {
              if (input[2] <= 3.8903602361679077) {
                  if (input[4] <= 72.5) {
                      var124 = [0.0, 1.0, 0.0];
                  } else {
                      var124 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var124 = [0.0, 0.0, 1.0];
              }
          } else {
              var124 = [1.0, 0.0, 0.0];
          }
      }
  }
  var76 = addVec(var77, var124);
  let var125: HazardVector = [0, 0, 0];
  if (input[0] <= 14.398411750793457) {
      if (input[4] <= 85.68462371826172) {
          if (input[4] <= 84.58483505249023) {
              if (input[4] <= 84.16609573364258) {
                  if (input[0] <= 11.78834581375122) {
                      var125 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[2] <= 2.905272364616394) {
                          if (input[1] <= 61.0) {
                              var125 = [0.0, 1.0, 0.0];
                          } else {
                              var125 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var125 = [0.0, 1.0, 0.0];
                      }
                  }
              } else {
                  if (input[1] <= 71.0) {
                      if (input[5] <= 26.42666721343994) {
                          var125 = [0.0, 1.0, 0.0];
                      } else {
                          var125 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var125 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[1] <= 52.5) {
                  if (input[0] <= 4.3999998569488525) {
                      var125 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[5] <= 6.668343544006348) {
                          var125 = [0.0, 0.0, 1.0];
                      } else {
                          var125 = [0.0, 1.0, 0.0];
                      }
                  }
              } else {
                  if (input[4] <= 84.83186340332031) {
                      if (input[1] <= 57.0) {
                          var125 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[0] <= 6.528637886047363) {
                              var125 = [0.0, 1.0, 0.0];
                          } else {
                              var125 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      var125 = [0.0, 0.0, 1.0];
                  }
              }
          }
      } else {
          if (input[1] <= 72.5) {
              if (input[2] <= 6.248931407928467) {
                  if (input[1] <= 52.5) {
                      if (input[1] <= 39.5) {
                          if (input[5] <= 45.7102108001709) {
                              var125 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[2] <= 3.350000023841858) {
                                  var125 = [0.0, 0.0, 1.0];
                              } else {
                                  var125 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          var125 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[1] <= 69.0) {
                          if (input[0] <= 10.744107723236084) {
                              var125 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[5] <= 113.42689895629883) {
                                  var125 = [0.7142857142857143, 0.0, 0.2857142857142857];
                              } else {
                                  var125 = [0.2, 0.0, 0.8];
                              }
                          }
                      } else {
                          var125 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  if (input[1] <= 43.5) {
                      var125 = [1.0, 0.0, 0.0];
                  } else {
                      var125 = [0.0, 1.0, 0.0];
                  }
              }
          } else {
              if (input[2] <= 3.799999952316284) {
                  if (input[1] <= 75.5) {
                      var125 = [1.0, 0.0, 0.0];
                  } else {
                      var125 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var125 = [1.0, 0.0, 0.0];
              }
          }
      }
  } else {
      if (input[5] <= 69.97344207763672) {
          if (input[4] <= 84.49527740478516) {
              var125 = [0.0, 1.0, 0.0];
          } else {
              if (input[5] <= 45.10000038146973) {
                  if (input[4] <= 91.39402389526367) {
                      if (input[2] <= 5.452848434448242) {
                          var125 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 20.15000057220459) {
                              var125 = [1.0, 0.0, 0.0];
                          } else {
                              var125 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[2] <= 4.25) {
                          if (input[5] <= 34.30000114440918) {
                              var125 = [1.0, 0.0, 0.0];
                          } else {
                              var125 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var125 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[2] <= 2.899999976158142) {
                      var125 = [0.0, 0.0, 1.0];
                  } else {
                      var125 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[2] <= 3.935486674308777) {
              if (input[0] <= 23.550000190734863) {
                  if (input[5] <= 239.75) {
                      if (input[2] <= 1.0999999642372131) {
                          var125 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[4] <= 91.78664779663086) {
                              if (input[1] <= 45.5) {
                                  var125 = [0.07058823529411765, 0.0, 0.9294117647058824];
                              } else {
                                  var125 = [0.2692307692307692, 0.0, 0.7307692307692307];
                              }
                          } else {
                              if (input[4] <= 92.0) {
                                  var125 = [0.6, 0.0, 0.4];
                              } else {
                                  var125 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      var125 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[5] <= 237.60000610351562) {
                      if (input[5] <= 79.25) {
                          var125 = [0.0, 0.0, 1.0];
                      } else {
                          var125 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var125 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[0] <= 18.166733741760254) {
                  if (input[0] <= 17.899999618530273) {
                      if (input[1] <= 52.5) {
                          var125 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[1] <= 64.0) {
                              if (input[5] <= 89.20000076293945) {
                                  var125 = [0.0, 0.0, 1.0];
                              } else {
                                  var125 = [0.7, 0.0, 0.3];
                              }
                          } else {
                              var125 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      var125 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[4] <= 90.48479080200195) {
                      if (input[0] <= 21.331899642944336) {
                          if (input[4] <= 90.14999771118164) {
                              var125 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[2] <= 4.964880466461182) {
                                  var125 = [1.0, 0.0, 0.0];
                              } else {
                                  var125 = [0.16666666666666666, 0.0, 0.8333333333333334];
                              }
                          }
                      } else {
                          var125 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var125 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  }
  var75 = addVec(var76, var125);
  let var126: HazardVector = [0, 0, 0];
  if (input[5] <= 72.20000076293945) {
      if (input[0] <= 7.950336694717407) {
          if (input[5] <= 25.951984405517578) {
              if (input[4] <= 84.53021240234375) {
                  var126 = [0.0, 1.0, 0.0];
              } else {
                  if (input[5] <= 25.245141983032227) {
                      if (input[1] <= 40.5) {
                          var126 = [0.0, 1.0, 0.0];
                      } else {
                          var126 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var126 = [0.0, 1.0, 0.0];
                  }
              }
          } else {
              if (input[0] <= 5.261884689331055) {
                  if (input[1] <= 60.5) {
                      var126 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[4] <= 84.29999923706055) {
                          var126 = [0.0, 0.0, 1.0];
                      } else {
                          var126 = [0.0, 1.0, 0.0];
                      }
                  }
              } else {
                  if (input[0] <= 5.478758811950684) {
                      var126 = [0.0, 1.0, 0.0];
                  } else {
                      var126 = [0.0, 0.0, 1.0];
                  }
              }
          }
      } else {
          if (input[0] <= 15.073886394500732) {
              if (input[1] <= 62.5) {
                  if (input[4] <= 84.86700820922852) {
                      if (input[5] <= 4.387729644775391) {
                          if (input[1] <= 41.5) {
                              var126 = [0.0, 1.0, 0.0];
                          } else {
                              var126 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[0] <= 8.859556674957275) {
                              if (input[2] <= 6.04730486869812) {
                                  var126 = [0.0, 1.0, 0.0];
                              } else {
                                  var126 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var126 = [0.0, 1.0, 0.0];
                          }
                      }
                  } else {
                      if (input[4] <= 90.75) {
                          if (input[4] <= 88.70000076293945) {
                              if (input[5] <= 18.889466285705566) {
                                  var126 = [0.03571428571428571, 0.07142857142857142, 0.8928571428571429];
                              } else {
                                  var126 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[2] <= 5.6000001430511475) {
                                  var126 = [0.2222222222222222, 0.0, 0.7777777777777778];
                              } else {
                                  var126 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          var126 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[1] <= 93.5) {
                      if (input[5] <= 5.337965488433838) {
                          var126 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[4] <= 84.47978210449219) {
                              var126 = [0.0, 1.0, 0.0];
                          } else {
                              var126 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      var126 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[0] <= 20.13606834411621) {
                  if (input[5] <= 44.76503944396973) {
                      if (input[1] <= 30.0) {
                          if (input[1] <= 21.5) {
                              var126 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[1] <= 24.5) {
                                  var126 = [0.0, 1.0, 0.0];
                              } else {
                                  var126 = [0.391304347826087, 0.043478260869565216, 0.5652173913043478];
                              }
                          }
                      } else {
                          var126 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[4] <= 87.9000015258789) {
                          if (input[2] <= 2.781790614128113) {
                              var126 = [0.0, 0.0, 1.0];
                          } else {
                              var126 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          var126 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[2] <= 2.6344388723373413) {
                      if (input[0] <= 24.699999809265137) {
                          var126 = [0.0, 0.0, 1.0];
                      } else {
                          var126 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[5] <= 44.61209678649902) {
                          var126 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[4] <= 88.03680801391602) {
                              var126 = [0.0, 1.0, 0.0];
                          } else {
                              var126 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          }
      }
  } else {
      if (input[1] <= 30.5) {
          if (input[2] <= 3.799999952316284) {
              if (input[0] <= 23.702549934387207) {
                  if (input[0] <= 22.18199634552002) {
                      var126 = [1.0, 0.0, 0.0];
                  } else {
                      var126 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[2] <= 3.3499999046325684) {
                      var126 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[0] <= 27.34999942779541) {
                          var126 = [1.0, 0.0, 0.0];
                      } else {
                          var126 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          } else {
              var126 = [1.0, 0.0, 0.0];
          }
      } else {
          if (input[5] <= 129.8000030517578) {
              if (input[4] <= 92.0) {
                  if (input[2] <= 6.5) {
                      if (input[0] <= 24.0) {
                          if (input[2] <= 4.832783460617065) {
                              if (input[5] <= 104.34992218017578) {
                                  var126 = [0.09523809523809523, 0.0, 0.9047619047619048];
                              } else {
                                  var126 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[4] <= 91.0999984741211) {
                                  var126 = [0.25, 0.0, 0.75];
                              } else {
                                  var126 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[4] <= 88.0) {
                              var126 = [0.0, 0.0, 1.0];
                          } else {
                              var126 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      var126 = [1.0, 0.0, 0.0];
                  }
              } else {
                  var126 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[5] <= 243.29999542236328) {
                  if (input[4] <= 91.0808334350586) {
                      if (input[0] <= 14.060507774353027) {
                          var126 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[1] <= 64.5) {
                              var126 = [0.0, 0.0, 1.0];
                          } else {
                              var126 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      var126 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[4] <= 90.33927917480469) {
                      var126 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[5] <= 273.04998779296875) {
                          var126 = [0.0, 0.0, 1.0];
                      } else {
                          var126 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      }
  }
  var74 = addVec(var75, var126);
  let var127: HazardVector = [0, 0, 0];
  if (input[4] <= 85.73360061645508) {
      if (input[4] <= 84.11833572387695) {
          if (input[2] <= 7.336445569992065) {
              if (input[5] <= 4.544931173324585) {
                  if (input[0] <= 11.898969173431396) {
                      var127 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[2] <= 3.4667460918426514) {
                          var127 = [0.0, 0.0, 1.0];
                      } else {
                          var127 = [0.0, 1.0, 0.0];
                      }
                  }
              } else {
                  var127 = [0.0, 1.0, 0.0];
              }
          } else {
              var127 = [0.0, 0.0, 1.0];
          }
      } else {
          if (input[5] <= 26.550000190734863) {
              if (input[0] <= 6.553701639175415) {
                  if (input[4] <= 85.1500015258789) {
                      if (input[5] <= 19.17283344268799) {
                          var127 = [0.0, 0.0, 1.0];
                      } else {
                          var127 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      var127 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[4] <= 84.72171020507812) {
                      if (input[2] <= 5.976433515548706) {
                          if (input[0] <= 9.699999809265137) {
                              var127 = [1.0, 0.0, 0.0];
                          } else {
                              var127 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          if (input[1] <= 43.5) {
                              var127 = [0.0, 1.0, 0.0];
                          } else {
                              var127 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[2] <= 5.7503767013549805) {
                          var127 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[1] <= 48.0) {
                              var127 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[2] <= 6.50654935836792) {
                                  var127 = [0.0, 1.0, 0.0];
                              } else {
                                  var127 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              }
          } else {
              var127 = [0.0, 0.0, 1.0];
          }
      }
  } else {
      if (input[2] <= 3.978654384613037) {
          if (input[0] <= 23.899999618530273) {
              if (input[4] <= 91.9976806640625) {
                  if (input[4] <= 91.091796875) {
                      var127 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[0] <= 22.221537590026855) {
                          if (input[0] <= 20.550000190734863) {
                              if (input[1] <= 33.5) {
                                  var127 = [1.0, 0.0, 0.0];
                              } else {
                                  var127 = [0.17857142857142858, 0.0, 0.8214285714285714];
                              }
                          } else {
                              if (input[1] <= 51.0) {
                                  var127 = [1.0, 0.0, 0.0];
                              } else {
                                  var127 = [0.5, 0.0, 0.5];
                              }
                          }
                      } else {
                          var127 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  var127 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[1] <= 42.0) {
                  var127 = [1.0, 0.0, 0.0];
              } else {
                  if (input[1] <= 46.5) {
                      var127 = [0.0, 0.0, 1.0];
                  } else {
                      var127 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[5] <= 85.0576286315918) {
              if (input[4] <= 90.64999771118164) {
                  if (input[2] <= 5.2750091552734375) {
                      var127 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[4] <= 89.15453720092773) {
                          if (input[0] <= 10.599999904632568) {
                              if (input[5] <= 10.312615871429443) {
                                  var127 = [0.0, 0.0, 1.0];
                              } else {
                                  var127 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[2] <= 6.254245758056641) {
                                  var127 = [0.0, 0.0, 1.0];
                              } else {
                                  var127 = [0.0, 0.2, 0.8];
                              }
                          }
                      } else {
                          if (input[2] <= 5.920847654342651) {
                              if (input[0] <= 12.349999904632568) {
                                  var127 = [1.0, 0.0, 0.0];
                              } else {
                                  var127 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              }
                          } else {
                              var127 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  var127 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[1] <= 41.5) {
                  var127 = [1.0, 0.0, 0.0];
              } else {
                  if (input[5] <= 129.8000030517578) {
                      if (input[5] <= 103.14416885375977) {
                          var127 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[4] <= 91.92840957641602) {
                              var127 = [0.0, 0.0, 1.0];
                          } else {
                              var127 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[4] <= 90.16674423217773) {
                          if (input[0] <= 14.060507774353027) {
                              var127 = [0.0, 0.0, 1.0];
                          } else {
                              var127 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var127 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      }
  }
  var73 = addVec(var74, var127);
  let var128: HazardVector = [0, 0, 0];
  if (input[0] <= 15.096360206604004) {
      if (input[1] <= 63.5) {
          if (input[4] <= 85.58578872680664) {
              if (input[0] <= 4.566897630691528) {
                  var128 = [0.0, 0.0, 1.0];
              } else {
                  if (input[2] <= 8.783466339111328) {
                      if (input[5] <= 26.53181552886963) {
                          if (input[1] <= 60.5) {
                              if (input[2] <= 6.686825513839722) {
                                  var128 = [0.0, 1.0, 0.0];
                              } else {
                                  var128 = [0.0, 0.8636363636363636, 0.13636363636363635];
                              }
                          } else {
                              if (input[0] <= 8.754452466964722) {
                                  var128 = [0.0, 1.0, 0.0];
                              } else {
                                  var128 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[1] <= 61.5) {
                              var128 = [0.0, 0.0, 1.0];
                          } else {
                              var128 = [0.0, 1.0, 0.0];
                          }
                      }
                  } else {
                      var128 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[2] <= 5.369261980056763) {
                  if (input[4] <= 90.75) {
                      if (input[5] <= 94.09440994262695) {
                          var128 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[1] <= 46.0) {
                              var128 = [0.0, 0.0, 1.0];
                          } else {
                              var128 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[2] <= 4.547133207321167) {
                          var128 = [1.0, 0.0, 0.0];
                      } else {
                          var128 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  if (input[4] <= 88.45000076293945) {
                      if (input[1] <= 49.0) {
                          if (input[0] <= 10.549303531646729) {
                              if (input[1] <= 43.0) {
                                  var128 = [0.0, 0.0, 1.0];
                              } else {
                                  var128 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var128 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var128 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      if (input[1] <= 39.5) {
                          var128 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[1] <= 44.0) {
                              var128 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[5] <= 113.20000076293945) {
                                  var128 = [1.0, 0.0, 0.0];
                              } else {
                                  var128 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              }
          }
      } else {
          if (input[4] <= 84.12134552001953) {
              if (input[0] <= 12.72461223602295) {
                  if (input[4] <= 82.52257919311523) {
                      var128 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[4] <= 82.596923828125) {
                          var128 = [0.0, 0.0, 1.0];
                      } else {
                          var128 = [0.0, 1.0, 0.0];
                      }
                  }
              } else {
                  var128 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[4] <= 88.0999984741211) {
                  if (input[0] <= 7.5) {
                      var128 = [1.0, 0.0, 0.0];
                  } else {
                      var128 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[1] <= 77.5) {
                      if (input[4] <= 90.06674194335938) {
                          if (input[4] <= 89.86674118041992) {
                              var128 = [1.0, 0.0, 0.0];
                          } else {
                              var128 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var128 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[0] <= 12.150460720062256) {
                          if (input[1] <= 82.0) {
                              var128 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[2] <= 2.0) {
                                  var128 = [0.0, 0.0, 1.0];
                              } else {
                                  var128 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[0] <= 13.650460720062256) {
                              var128 = [0.0, 0.0, 1.0];
                          } else {
                              var128 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          }
      }
  } else {
      if (input[4] <= 91.78664779663086) {
          if (input[0] <= 24.0) {
              if (input[4] <= 83.92634963989258) {
                  var128 = [0.0, 1.0, 0.0];
              } else {
                  if (input[5] <= 129.8000030517578) {
                      if (input[4] <= 91.09317016601562) {
                          if (input[5] <= 15.90000057220459) {
                              if (input[5] <= 13.900000095367432) {
                                  var128 = [0.0, 0.0, 1.0];
                              } else {
                                  var128 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[1] <= 38.5) {
                                  var128 = [0.0, 0.0, 1.0];
                              } else {
                                  var128 = [0.06666666666666667, 0.0, 0.9333333333333333];
                              }
                          }
                      } else {
                          if (input[0] <= 17.268617630004883) {
                              if (input[0] <= 16.0) {
                                  var128 = [0.8, 0.0, 0.2];
                              } else {
                                  var128 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[2] <= 3.1495862007141113) {
                                  var128 = [0.47368421052631576, 0.0, 0.5263157894736842];
                              } else {
                                  var128 = [0.05, 0.0, 0.95];
                              }
                          }
                      }
                  } else {
                      if (input[5] <= 243.29999542236328) {
                          if (input[2] <= 3.3499999046325684) {
                              if (input[1] <= 38.0) {
                                  var128 = [1.0, 0.0, 0.0];
                              } else {
                                  var128 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var128 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var128 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          } else {
              if (input[5] <= 58.89999961853027) {
                  var128 = [0.0, 1.0, 0.0];
              } else {
                  if (input[5] <= 227.25) {
                      if (input[0] <= 24.399999618530273) {
                          if (input[5] <= 88.79999923706055) {
                              var128 = [0.0, 0.0, 1.0];
                          } else {
                              var128 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var128 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var128 = [0.0, 0.0, 1.0];
                  }
              }
          }
      } else {
          if (input[0] <= 16.260193824768066) {
              if (input[2] <= 3.1924444437026978) {
                  var128 = [0.0, 0.0, 1.0];
              } else {
                  var128 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[1] <= 44.5) {
                  var128 = [1.0, 0.0, 0.0];
              } else {
                  if (input[1] <= 46.0) {
                      if (input[5] <= 111.44999694824219) {
                          var128 = [1.0, 0.0, 0.0];
                      } else {
                          var128 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var128 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  }
  var72 = addVec(var73, var128);
  let var129: HazardVector = [0, 0, 0];
  if (input[4] <= 85.68462371826172) {
      if (input[4] <= 84.66106796264648) {
          if (input[0] <= 23.982781410217285) {
              if (input[5] <= 27.504060745239258) {
                  if (input[2] <= 8.49633240699768) {
                      if (input[1] <= 78.5) {
                          if (input[1] <= 73.5) {
                              var129 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[1] <= 74.5) {
                                  var129 = [0.0, 0.6, 0.4];
                              } else {
                                  var129 = [0.0, 1.0, 0.0];
                              }
                          }
                      } else {
                          if (input[1] <= 79.5) {
                              var129 = [1.0, 0.0, 0.0];
                          } else {
                              var129 = [0.0, 1.0, 0.0];
                          }
                      }
                  } else {
                      var129 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[4] <= 83.90684509277344) {
                      var129 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[2] <= 6.231165647506714) {
                          var129 = [0.0, 1.0, 0.0];
                      } else {
                          var129 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          } else {
              if (input[1] <= 36.5) {
                  if (input[2] <= 2.899999976158142) {
                      var129 = [0.0, 1.0, 0.0];
                  } else {
                      var129 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var129 = [0.0, 1.0, 0.0];
              }
          }
      } else {
          if (input[5] <= 25.720169067382812) {
              if (input[0] <= 6.471441268920898) {
                  var129 = [0.0, 1.0, 0.0];
              } else {
                  if (input[5] <= 14.465362071990967) {
                      if (input[2] <= 5.291021108627319) {
                          if (input[4] <= 84.86700820922852) {
                              var129 = [0.0, 1.0, 0.0];
                          } else {
                              var129 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var129 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var129 = [0.0, 1.0, 0.0];
                  }
              }
          } else {
              var129 = [0.0, 0.0, 1.0];
          }
      }
  } else {
      if (input[4] <= 91.66276931762695) {
          if (input[1] <= 71.5) {
              if (input[0] <= 24.299999237060547) {
                  if (input[2] <= 4.844913005828857) {
                      if (input[2] <= 2.690904974937439) {
                          if (input[1] <= 49.0) {
                              var129 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[5] <= 153.9000015258789) {
                                  var129 = [0.0, 0.0, 1.0];
                              } else {
                                  var129 = [0.07692307692307693, 0.0, 0.9230769230769231];
                              }
                          }
                      } else {
                          if (input[1] <= 47.5) {
                              if (input[5] <= 107.79999923706055) {
                                  var129 = [0.046153846153846156, 0.0, 0.9538461538461539];
                              } else {
                                  var129 = [0.3, 0.0, 0.7];
                              }
                          } else {
                              if (input[4] <= 91.07256317138672) {
                                  var129 = [0.1111111111111111, 0.0, 0.8888888888888888];
                              } else {
                                  var129 = [0.5625, 0.0, 0.4375];
                              }
                          }
                      }
                  } else {
                      if (input[4] <= 89.25) {
                          if (input[5] <= 22.600000381469727) {
                              if (input[2] <= 6.050000190734863) {
                                  var129 = [1.0, 0.0, 0.0];
                              } else {
                                  var129 = [0.0, 1.0, 0.0];
                              }
                          } else {
                              if (input[2] <= 5.4326722621917725) {
                                  var129 = [0.14285714285714285, 0.0, 0.8571428571428571];
                              } else {
                                  var129 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[5] <= 109.20930099487305) {
                              if (input[0] <= 13.449999809265137) {
                                  var129 = [0.8, 0.0, 0.2];
                              } else {
                                  var129 = [0.9473684210526315, 0.0, 0.05263157894736842];
                              }
                          } else {
                              if (input[0] <= 14.810507774353027) {
                                  var129 = [0.2, 0.0, 0.8];
                              } else {
                                  var129 = [0.8333333333333334, 0.0, 0.16666666666666666];
                              }
                          }
                      }
                  }
              } else {
                  if (input[1] <= 31.5) {
                      var129 = [0.0, 0.0, 1.0];
                  } else {
                      var129 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[1] <= 74.5) {
                  var129 = [1.0, 0.0, 0.0];
              } else {
                  if (input[2] <= 3.799999952316284) {
                      var129 = [0.0, 0.0, 1.0];
                  } else {
                      var129 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[4] <= 92.0) {
              if (input[1] <= 42.0) {
                  var129 = [1.0, 0.0, 0.0];
              } else {
                  if (input[3] <= 0.10000000149011612) {
                      if (input[2] <= 4.27163290977478) {
                          var129 = [0.0, 0.0, 1.0];
                      } else {
                          var129 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var129 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              var129 = [1.0, 0.0, 0.0];
          }
      }
  }
  var71 = addVec(var72, var129);
  let var130: HazardVector = [0, 0, 0];
  if (input[4] <= 84.72245788574219) {
      if (input[2] <= 6.705887317657471) {
          if (input[0] <= 23.75) {
              if (input[4] <= 84.67056274414062) {
                  if (input[2] <= 1.8614205718040466) {
                      if (input[1] <= 70.5) {
                          var130 = [0.0, 1.0, 0.0];
                      } else {
                          var130 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var130 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[0] <= 10.849999904632568) {
                      var130 = [0.0, 0.0, 1.0];
                  } else {
                      var130 = [0.0, 1.0, 0.0];
                  }
              }
          } else {
              if (input[1] <= 35.5) {
                  var130 = [0.0, 0.0, 1.0];
              } else {
                  var130 = [0.0, 1.0, 0.0];
              }
          }
      } else {
          if (input[4] <= 84.66485595703125) {
              if (input[4] <= 83.35464096069336) {
                  var130 = [0.0, 1.0, 0.0];
              } else {
                  var130 = [0.0, 0.0, 1.0];
              }
          } else {
              var130 = [0.0, 1.0, 0.0];
          }
      }
  } else {
      if (input[1] <= 35.5) {
          if (input[4] <= 90.98385238647461) {
              if (input[4] <= 85.6363525390625) {
                  if (input[0] <= 11.57860255241394) {
                      var130 = [0.0, 1.0, 0.0];
                  } else {
                      var130 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[0] <= 24.299999237060547) {
                      if (input[0] <= 15.28995418548584) {
                          if (input[1] <= 30.5) {
                              var130 = [0.0, 0.0, 1.0];
                          } else {
                              var130 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var130 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[2] <= 2.899999976158142) {
                          var130 = [1.0, 0.0, 0.0];
                      } else {
                          var130 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          } else {
              if (input[1] <= 30.5) {
                  var130 = [1.0, 0.0, 0.0];
              } else {
                  if (input[2] <= 3.085856795310974) {
                      if (input[2] <= 2.885856866836548) {
                          if (input[4] <= 91.70000076293945) {
                              if (input[0] <= 21.449999809265137) {
                                  var130 = [1.0, 0.0, 0.0];
                              } else {
                                  var130 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var130 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var130 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var130 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[5] <= 129.8000030517578) {
              if (input[0] <= 18.166733741760254) {
                  if (input[2] <= 3.401381254196167) {
                      if (input[0] <= 14.099999904632568) {
                          var130 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[2] <= 1.92745041847229) {
                              if (input[4] <= 89.94683456420898) {
                                  var130 = [0.0, 0.0, 1.0];
                              } else {
                                  var130 = [0.8333333333333334, 0.0, 0.16666666666666666];
                              }
                          } else {
                              var130 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[5] <= 86.90763092041016) {
                          if (input[3] <= 0.10000000149011612) {
                              if (input[0] <= 11.400000095367432) {
                                  var130 = [0.0, 0.0, 1.0];
                              } else {
                                  var130 = [0.3235294117647059, 0.058823529411764705, 0.6176470588235294];
                              }
                          } else {
                              var130 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[4] <= 91.9366455078125) {
                              if (input[2] <= 5.6000001430511475) {
                                  var130 = [0.0, 0.0, 1.0];
                              } else {
                                  var130 = [0.8, 0.0, 0.2];
                              }
                          } else {
                              var130 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  if (input[2] <= 3.935486674308777) {
                      if (input[4] <= 92.0) {
                          if (input[2] <= 1.2194949984550476) {
                              var130 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[2] <= 1.8323256969451904) {
                                  var130 = [0.23076923076923078, 0.0, 0.7692307692307693];
                              } else {
                                  var130 = [0.07017543859649122, 0.0, 0.9298245614035088];
                              }
                          }
                      } else {
                          var130 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[0] <= 21.331899642944336) {
                          var130 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[0] <= 22.180213928222656) {
                              var130 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[5] <= 102.60000228881836) {
                                  var130 = [1.0, 0.0, 0.0];
                              } else {
                                  var130 = [0.75, 0.0, 0.25];
                              }
                          }
                      }
                  }
              }
          } else {
              if (input[4] <= 91.64999771118164) {
                  if (input[0] <= 12.549999713897705) {
                      var130 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[5] <= 243.29999542236328) {
                          if (input[5] <= 139.60000610351562) {
                              if (input[0] <= 19.75) {
                                  var130 = [0.0, 0.0, 1.0];
                              } else {
                                  var130 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[4] <= 89.9671859741211) {
                                  var130 = [0.2857142857142857, 0.0, 0.7142857142857143];
                              } else {
                                  var130 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[0] <= 15.550000190734863) {
                              var130 = [1.0, 0.0, 0.0];
                          } else {
                              var130 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  var130 = [1.0, 0.0, 0.0];
              }
          }
      }
  }
  var70 = addVec(var71, var130);
  let var131: HazardVector = [0, 0, 0];
  if (input[5] <= 72.20000076293945) {
      if (input[1] <= 62.5) {
          if (input[0] <= 4.566897630691528) {
              var131 = [0.0, 0.0, 1.0];
          } else {
              if (input[2] <= 2.654821515083313) {
                  if (input[4] <= 84.4237289428711) {
                      var131 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[1] <= 42.5) {
                          if (input[2] <= 1.0999999642372131) {
                              if (input[1] <= 37.5) {
                                  var131 = [0.0, 0.0, 1.0];
                              } else {
                                  var131 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var131 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var131 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  if (input[1] <= 23.0) {
                      var131 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[0] <= 15.526739597320557) {
                          if (input[4] <= 84.99010467529297) {
                              if (input[1] <= 53.5) {
                                  var131 = [0.0, 0.9906542056074766, 0.009345794392523364];
                              } else {
                                  var131 = [0.0, 0.75, 0.25];
                              }
                          } else {
                              if (input[2] <= 5.369261980056763) {
                                  var131 = [0.037037037037037035, 0.0, 0.9629629629629629];
                              } else {
                                  var131 = [0.5714285714285714, 0.07142857142857142, 0.35714285714285715];
                              }
                          }
                      } else {
                          if (input[5] <= 52.562095642089844) {
                              if (input[0] <= 17.61653232574463) {
                                  var131 = [0.3947368421052632, 0.368421052631579, 0.2368421052631579];
                              } else {
                                  var131 = [0.23529411764705882, 0.058823529411764705, 0.7058823529411765];
                              }
                          } else {
                              if (input[4] <= 86.04999923706055) {
                                  var131 = [0.0, 1.0, 0.0];
                              } else {
                                  var131 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              }
          }
      } else {
          if (input[1] <= 92.0) {
              if (input[4] <= 84.56925964355469) {
                  if (input[5] <= 3.350000023841858) {
                      var131 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[5] <= 6.800569295883179) {
                          if (input[0] <= 6.5137856006622314) {
                              var131 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[0] <= 6.754234790802002) {
                                  var131 = [1.0, 0.0, 0.0];
                              } else {
                                  var131 = [0.0, 1.0, 0.0];
                              }
                          }
                      } else {
                          var131 = [0.0, 1.0, 0.0];
                      }
                  }
              } else {
                  var131 = [0.0, 0.0, 1.0];
              }
          } else {
              var131 = [0.0, 0.0, 1.0];
          }
      }
  } else {
      if (input[2] <= 3.959672212600708) {
          if (input[5] <= 129.8000030517578) {
              if (input[5] <= 124.12013626098633) {
                  if (input[5] <= 115.75) {
                      if (input[5] <= 108.35000228881836) {
                          if (input[5] <= 103.5) {
                              if (input[4] <= 91.51435852050781) {
                                  var131 = [0.0, 0.0, 1.0];
                              } else {
                                  var131 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[4] <= 91.341796875) {
                                  var131 = [0.0, 0.0, 1.0];
                              } else {
                                  var131 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[1] <= 44.5) {
                              if (input[1] <= 43.0) {
                                  var131 = [0.25, 0.0, 0.75];
                              } else {
                                  var131 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[5] <= 111.42449569702148) {
                                  var131 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              } else {
                                  var131 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  } else {
                      var131 = [1.0, 0.0, 0.0];
                  }
              } else {
                  var131 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[5] <= 239.75) {
                  if (input[0] <= 15.911245822906494) {
                      if (input[4] <= 91.16413116455078) {
                          var131 = [0.0, 0.0, 1.0];
                      } else {
                          var131 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var131 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[0] <= 15.400000095367432) {
                      var131 = [1.0, 0.0, 0.0];
                  } else {
                      var131 = [0.0, 0.0, 1.0];
                  }
              }
          }
      } else {
          if (input[4] <= 91.75) {
              if (input[5] <= 130.9000015258789) {
                  if (input[1] <= 42.5) {
                      var131 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[0] <= 19.949999809265137) {
                          if (input[1] <= 69.5) {
                              if (input[1] <= 54.5) {
                                  var131 = [0.0, 0.0, 1.0];
                              } else {
                                  var131 = [0.3333333333333333, 0.0, 0.6666666666666666];
                              }
                          } else {
                              var131 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[5] <= 83.17086791992188) {
                              var131 = [0.0, 0.0, 1.0];
                          } else {
                              var131 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  var131 = [1.0, 0.0, 0.0];
              }
          } else {
              var131 = [1.0, 0.0, 0.0];
          }
      }
  }
  var69 = addVec(var70, var131);
  let var132: HazardVector = [0, 0, 0];
  if (input[1] <= 36.5) {
      if (input[2] <= 4.9472880363464355) {
          if (input[5] <= 103.44342803955078) {
              if (input[2] <= 4.42339301109314) {
                  if (input[0] <= 23.867650985717773) {
                      if (input[5] <= 5.749290466308594) {
                          var132 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[4] <= 91.18585968017578) {
                              var132 = [0.0, 0.0, 1.0];
                          } else {
                              var132 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[5] <= 79.35000228881836) {
                          if (input[5] <= 66.2592601776123) {
                              var132 = [0.0, 1.0, 0.0];
                          } else {
                              var132 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var132 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[4] <= 91.14999771118164) {
                      if (input[4] <= 86.77634811401367) {
                          var132 = [0.0, 1.0, 0.0];
                      } else {
                          var132 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var132 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[0] <= 23.35254955291748) {
                  if (input[1] <= 33.5) {
                      if (input[0] <= 21.50369930267334) {
                          var132 = [1.0, 0.0, 0.0];
                      } else {
                          var132 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var132 = [1.0, 0.0, 0.0];
                  }
              } else {
                  var132 = [1.0, 0.0, 0.0];
              }
          }
      } else {
          if (input[5] <= 25.550000190734863) {
              if (input[0] <= 17.45969867706299) {
                  if (input[1] <= 31.5) {
                      if (input[4] <= 89.4000015258789) {
                          var132 = [0.0, 1.0, 0.0];
                      } else {
                          var132 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[4] <= 87.74555206298828) {
                          var132 = [0.0, 1.0, 0.0];
                      } else {
                          var132 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  var132 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[4] <= 90.47937393188477) {
                  if (input[0] <= 16.337639808654785) {
                      if (input[4] <= 85.49764633178711) {
                          var132 = [0.0, 1.0, 0.0];
                      } else {
                          var132 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var132 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var132 = [1.0, 0.0, 0.0];
              }
          }
      }
  } else {
      if (input[4] <= 84.65357971191406) {
          if (input[2] <= 6.705887317657471) {
              if (input[5] <= 3.332324981689453) {
                  if (input[4] <= 62.09445381164551) {
                      var132 = [0.0, 1.0, 0.0];
                  } else {
                      var132 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[1] <= 73.5) {
                      var132 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[4] <= 82.52257919311523) {
                          var132 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[5] <= 4.269688606262207) {
                              var132 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[5] <= 4.856301546096802) {
                                  var132 = [0.0, 0.0, 1.0];
                              } else {
                                  var132 = [0.0, 1.0, 0.0];
                              }
                          }
                      }
                  }
              }
          } else {
              var132 = [0.0, 0.0, 1.0];
          }
      } else {
          if (input[4] <= 91.95000076293945) {
              if (input[1] <= 72.5) {
                  if (input[2] <= 5.369261980056763) {
                      if (input[0] <= 23.37302303314209) {
                          if (input[5] <= 91.2944107055664) {
                              if (input[1] <= 38.5) {
                                  var132 = [0.1111111111111111, 0.0, 0.8888888888888888];
                              } else {
                                  var132 = [0.022222222222222223, 0.0, 0.9777777777777777];
                              }
                          } else {
                              if (input[2] <= 1.818620502948761) {
                                  var132 = [0.5555555555555556, 0.0, 0.4444444444444444];
                              } else {
                                  var132 = [0.14814814814814814, 0.0, 0.8518518518518519];
                              }
                          }
                      } else {
                          if (input[2] <= 2.4499999284744263) {
                              if (input[5] <= 94.44999694824219) {
                                  var132 = [0.0, 0.0, 1.0];
                              } else {
                                  var132 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var132 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[0] <= 14.149999618530273) {
                          if (input[0] <= 11.150000095367432) {
                              if (input[1] <= 48.5) {
                                  var132 = [0.0, 0.0, 1.0];
                              } else {
                                  var132 = [0.125, 0.0, 0.875];
                              }
                          } else {
                              if (input[4] <= 86.53644180297852) {
                                  var132 = [0.0, 1.0, 0.0];
                              } else {
                                  var132 = [0.35714285714285715, 0.0, 0.6428571428571429];
                              }
                          }
                      } else {
                          if (input[4] <= 89.79999923706055) {
                              if (input[1] <= 59.5) {
                                  var132 = [0.0, 0.0, 1.0];
                              } else {
                                  var132 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var132 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  if (input[5] <= 144.94651794433594) {
                      if (input[0] <= 12.450460433959961) {
                          if (input[4] <= 86.8499984741211) {
                              var132 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[5] <= 100.10000228881836) {
                                  var132 = [1.0, 0.0, 0.0];
                              } else {
                                  var132 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              }
                          }
                      } else {
                          var132 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[0] <= 13.0) {
                          var132 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[1] <= 77.5) {
                              var132 = [1.0, 0.0, 0.0];
                          } else {
                              var132 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              }
          } else {
              var132 = [1.0, 0.0, 0.0];
          }
      }
  }
  var68 = addVec(var69, var132);
  let var133: HazardVector = [0, 0, 0];
  if (input[0] <= 15.485125541687012) {
      if (input[4] <= 85.68462371826172) {
          if (input[0] <= 4.580510377883911) {
              var133 = [0.0, 0.0, 1.0];
          } else {
              if (input[2] <= 6.631026029586792) {
                  if (input[2] <= 1.8503767251968384) {
                      if (input[1] <= 71.0) {
                          var133 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[0] <= 9.27065896987915) {
                              var133 = [0.0, 1.0, 0.0];
                          } else {
                              var133 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      var133 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[0] <= 4.700000047683716) {
                      var133 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[1] <= 34.5) {
                          var133 = [0.0, 1.0, 0.0];
                      } else {
                          var133 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          }
      } else {
          if (input[1] <= 63.5) {
              if (input[1] <= 31.0) {
                  if (input[5] <= 37.75) {
                      var133 = [1.0, 0.0, 0.0];
                  } else {
                      var133 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[4] <= 88.70000076293945) {
                      if (input[1] <= 45.5) {
                          if (input[2] <= 5.475009202957153) {
                              var133 = [0.0, 0.0, 1.0];
                          } else {
                              var133 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[4] <= 86.19046020507812) {
                              var133 = [0.0, 1.0, 0.0];
                          } else {
                              var133 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[1] <= 59.5) {
                          if (input[1] <= 47.0) {
                              if (input[0] <= 12.760210037231445) {
                                  var133 = [1.0, 0.0, 0.0];
                              } else {
                                  var133 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[5] <= 113.20000076293945) {
                                  var133 = [0.8571428571428571, 0.0, 0.14285714285714285];
                              } else {
                                  var133 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          var133 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          } else {
              if (input[5] <= 166.70000457763672) {
                  if (input[4] <= 88.45000076293945) {
                      var133 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[2] <= 2.25) {
                          var133 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[2] <= 4.45613956451416) {
                              if (input[5] <= 117.92689895629883) {
                                  var133 = [1.0, 0.0, 0.0];
                              } else {
                                  var133 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[1] <= 65.5) {
                                  var133 = [0.0, 0.0, 1.0];
                              } else {
                                  var133 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              } else {
                  var133 = [1.0, 0.0, 0.0];
              }
          }
      }
  } else {
      if (input[2] <= 3.977606415748596) {
          if (input[4] <= 91.95000076293945) {
              if (input[0] <= 23.62967872619629) {
                  if (input[4] <= 82.96293640136719) {
                      var133 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[4] <= 91.09317016601562) {
                          var133 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[4] <= 91.20571517944336) {
                              if (input[2] <= 2.899999976158142) {
                                  var133 = [1.0, 0.0, 0.0];
                              } else {
                                  var133 = [0.75, 0.0, 0.25];
                              }
                          } else {
                              if (input[0] <= 20.550000190734863) {
                                  var133 = [0.0851063829787234, 0.0, 0.9148936170212766];
                              } else {
                                  var133 = [0.4444444444444444, 0.0, 0.5555555555555556];
                              }
                          }
                      }
                  }
              } else {
                  if (input[5] <= 60.69137001037598) {
                      if (input[5] <= 53.95000076293945) {
                          var133 = [0.0, 0.0, 1.0];
                      } else {
                          var133 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      if (input[4] <= 87.25) {
                          var133 = [0.0, 0.0, 1.0];
                      } else {
                          var133 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              var133 = [1.0, 0.0, 0.0];
          }
      } else {
          if (input[1] <= 45.5) {
              if (input[4] <= 90.8499984741211) {
                  if (input[5] <= 14.781858563423157) {
                      var133 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[1] <= 38.5) {
                          if (input[2] <= 4.609325408935547) {
                              var133 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[4] <= 84.41270065307617) {
                                  var133 = [0.0, 1.0, 0.0];
                              } else {
                                  var133 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[5] <= 104.06520080566406) {
                              var133 = [1.0, 0.0, 0.0];
                          } else {
                              var133 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  var133 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[4] <= 83.38681030273438) {
                  var133 = [0.0, 1.0, 0.0];
              } else {
                  if (input[2] <= 4.362565517425537) {
                      var133 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[0] <= 16.75) {
                          if (input[2] <= 5.150000095367432) {
                              var133 = [0.0, 0.0, 1.0];
                          } else {
                              var133 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[4] <= 89.94022369384766) {
                              if (input[0] <= 19.443739891052246) {
                                  var133 = [1.0, 0.0, 0.0];
                              } else {
                                  var133 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var133 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          }
      }
  }
  var67 = addVec(var68, var133);
  let var134: HazardVector = [0, 0, 0];
  if (input[4] <= 84.6620979309082) {
      if (input[0] <= 4.566897630691528) {
          var134 = [0.0, 0.0, 1.0];
      } else {
          if (input[1] <= 53.5) {
              if (input[1] <= 29.0) {
                  if (input[1] <= 27.5) {
                      var134 = [0.0, 1.0, 0.0];
                  } else {
                      var134 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var134 = [0.0, 1.0, 0.0];
              }
          } else {
              if (input[0] <= 14.596850872039795) {
                  if (input[4] <= 84.6053695678711) {
                      if (input[0] <= 12.788825035095215) {
                          if (input[5] <= 27.10390567779541) {
                              var134 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[4] <= 83.90684509277344) {
                                  var134 = [0.0, 1.0, 0.0];
                              } else {
                                  var134 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          var134 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var134 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var134 = [0.0, 1.0, 0.0];
              }
          }
      }
  } else {
      if (input[0] <= 23.369670867919922) {
          if (input[1] <= 22.5) {
              if (input[2] <= 8.049999952316284) {
                  var134 = [1.0, 0.0, 0.0];
              } else {
                  var134 = [0.0, 1.0, 0.0];
              }
          } else {
              if (input[4] <= 91.78664779663086) {
                  if (input[2] <= 4.891844987869263) {
                      if (input[5] <= 131.34197235107422) {
                          if (input[3] <= 0.10000000149011612) {
                              if (input[1] <= 30.0) {
                                  var134 = [0.5, 0.0, 0.5];
                              } else {
                                  var134 = [0.07423580786026202, 0.004366812227074236, 0.9213973799126638];
                              }
                          } else {
                              var134 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[4] <= 91.54999923706055) {
                              if (input[1] <= 57.0) {
                                  var134 = [0.2777777777777778, 0.0, 0.7222222222222222];
                              } else {
                                  var134 = [0.7692307692307693, 0.0, 0.23076923076923078];
                              }
                          } else {
                              if (input[0] <= 20.699999809265137) {
                                  var134 = [0.0, 0.0, 1.0];
                              } else {
                                  var134 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      if (input[2] <= 4.954414367675781) {
                          if (input[4] <= 87.79999923706055) {
                              var134 = [0.0, 0.0, 1.0];
                          } else {
                              var134 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[2] <= 5.369261980056763) {
                              if (input[4] <= 85.3420524597168) {
                                  var134 = [0.0, 1.0, 0.0];
                              } else {
                                  var134 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[2] <= 7.876859903335571) {
                                  var134 = [0.42857142857142855, 0.047619047619047616, 0.5238095238095238];
                              } else {
                                  var134 = [0.8571428571428571, 0.0, 0.14285714285714285];
                              }
                          }
                      }
                  }
              } else {
                  if (input[5] <= 111.74444198608398) {
                      var134 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[5] <= 113.84444427490234) {
                          var134 = [0.0, 0.0, 1.0];
                      } else {
                          var134 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      } else {
          if (input[2] <= 2.102959156036377) {
              if (input[5] <= 85.0) {
                  var134 = [0.0, 0.0, 1.0];
              } else {
                  var134 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[0] <= 23.667651176452637) {
                  if (input[0] <= 23.617650985717773) {
                      var134 = [1.0, 0.0, 0.0];
                  } else {
                      var134 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var134 = [1.0, 0.0, 0.0];
              }
          }
      }
  }
  var66 = addVec(var67, var134);
  let var135: HazardVector = [0, 0, 0];
  if (input[1] <= 36.5) {
      if (input[5] <= 46.02902793884277) {
          if (input[1] <= 23.5) {
              if (input[4] <= 89.4000015258789) {
                  var135 = [0.0, 1.0, 0.0];
              } else {
                  var135 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[0] <= 13.140066623687744) {
                  if (input[2] <= 4.066213369369507) {
                      var135 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[2] <= 7.4836485385894775) {
                          var135 = [0.0, 1.0, 0.0];
                      } else {
                          var135 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[1] <= 30.5) {
                      if (input[1] <= 29.5) {
                          if (input[4] <= 90.79999923706055) {
                              if (input[2] <= 5.516256332397461) {
                                  var135 = [0.0, 0.3333333333333333, 0.6666666666666666];
                              } else {
                                  var135 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var135 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[4] <= 84.41270065307617) {
                              var135 = [0.0, 1.0, 0.0];
                          } else {
                              var135 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[5] <= 20.790355682373047) {
                          var135 = [1.0, 0.0, 0.0];
                      } else {
                          var135 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          }
      } else {
          if (input[0] <= 23.683034896850586) {
              if (input[0] <= 20.812732696533203) {
                  if (input[2] <= 5.014074087142944) {
                      var135 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[5] <= 82.63973999023438) {
                          var135 = [0.0, 1.0, 0.0];
                      } else {
                          var135 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[2] <= 3.799999952316284) {
                      if (input[4] <= 91.35931396484375) {
                          if (input[1] <= 35.5) {
                              var135 = [0.0, 0.0, 1.0];
                          } else {
                              var135 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          var135 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var135 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[4] <= 85.19886016845703) {
                  var135 = [0.0, 1.0, 0.0];
              } else {
                  var135 = [1.0, 0.0, 0.0];
              }
          }
      }
  } else {
      if (input[1] <= 66.5) {
          if (input[4] <= 84.71780395507812) {
              if (input[4] <= 84.39938735961914) {
                  var135 = [0.0, 1.0, 0.0];
              } else {
                  if (input[4] <= 84.42977905273438) {
                      var135 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[2] <= 7.449396848678589) {
                          var135 = [0.0, 1.0, 0.0];
                      } else {
                          var135 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          } else {
              if (input[0] <= 19.58334732055664) {
                  if (input[2] <= 4.844913005828857) {
                      if (input[5] <= 32.31415271759033) {
                          var135 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[4] <= 91.87258529663086) {
                              if (input[2] <= 1.0999999642372131) {
                                  var135 = [1.0, 0.0, 0.0];
                              } else {
                                  var135 = [0.07079646017699115, 0.0, 0.9292035398230089];
                              }
                          } else {
                              if (input[0] <= 15.799999713897705) {
                                  var135 = [0.8333333333333334, 0.0, 0.16666666666666666];
                              } else {
                                  var135 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      if (input[4] <= 91.04999923706055) {
                          if (input[1] <= 64.5) {
                              if (input[5] <= 26.257628440856934) {
                                  var135 = [0.4, 0.4, 0.2];
                              } else {
                                  var135 = [0.08, 0.0, 0.92];
                              }
                          } else {
                              var135 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[4] <= 91.8499984741211) {
                              if (input[1] <= 47.0) {
                                  var135 = [1.0, 0.0, 0.0];
                              } else {
                                  var135 = [0.75, 0.0, 0.25];
                              }
                          } else {
                              var135 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  if (input[4] <= 91.75) {
                      if (input[5] <= 92.72871780395508) {
                          var135 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[2] <= 3.5367971658706665) {
                              if (input[4] <= 91.40608978271484) {
                                  var135 = [0.0, 0.0, 1.0];
                              } else {
                                  var135 = [0.4, 0.0, 0.6];
                              }
                          } else {
                              if (input[5] <= 100.4000015258789) {
                                  var135 = [1.0, 0.0, 0.0];
                              } else {
                                  var135 = [0.6363636363636364, 0.0, 0.36363636363636365];
                              }
                          }
                      }
                  } else {
                      if (input[5] <= 116.8499984741211) {
                          if (input[4] <= 92.0) {
                              var135 = [0.0, 0.0, 1.0];
                          } else {
                              var135 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var135 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      } else {
          if (input[1] <= 85.0) {
              if (input[5] <= 75.30049133300781) {
                  if (input[2] <= 1.86801016330719) {
                      if (input[2] <= 1.7544947862625122) {
                          var135 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[1] <= 71.0) {
                              var135 = [0.0, 1.0, 0.0];
                          } else {
                              var135 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[5] <= 6.631809234619141) {
                          var135 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[0] <= 6.822648763656616) {
                              var135 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[4] <= 85.78849792480469) {
                                  var135 = [0.0, 1.0, 0.0];
                              } else {
                                  var135 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[5] <= 100.59394073486328) {
                      var135 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[4] <= 90.97926712036133) {
                          var135 = [0.0, 0.0, 1.0];
                      } else {
                          var135 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[2] <= 4.700000047683716) {
                  if (input[4] <= 72.3247013092041) {
                      var135 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[4] <= 91.54999923706055) {
                          var135 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[1] <= 91.5) {
                              var135 = [0.0, 0.0, 1.0];
                          } else {
                              var135 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  if (input[3] <= 0.10000000149011612) {
                      if (input[5] <= 112.4000015258789) {
                          var135 = [0.0, 0.0, 1.0];
                      } else {
                          var135 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var135 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  }
  var65 = addVec(var66, var135);
  let var136: HazardVector = [0, 0, 0];
  if (input[0] <= 15.073886394500732) {
      if (input[5] <= 25.82828998565674) {
          if (input[2] <= 8.783466339111328) {
              if (input[1] <= 34.0) {
                  var136 = [0.0, 1.0, 0.0];
              } else {
                  if (input[0] <= 7.454452276229858) {
                      if (input[1] <= 78.5) {
                          if (input[4] <= 84.65594100952148) {
                              var136 = [0.0, 1.0, 0.0];
                          } else {
                              var136 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[0] <= 5.949999809265137) {
                              var136 = [0.0, 1.0, 0.0];
                          } else {
                              var136 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[4] <= 84.67908096313477) {
                          if (input[5] <= 4.721612453460693) {
                              var136 = [0.0, 0.0, 1.0];
                          } else {
                              var136 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          if (input[2] <= 3.978654384613037) {
                              var136 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[2] <= 7.059627056121826) {
                                  var136 = [0.0, 0.5454545454545454, 0.45454545454545453];
                              } else {
                                  var136 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              }
          } else {
              var136 = [0.0, 0.0, 1.0];
          }
      } else {
          if (input[4] <= 83.97518157958984) {
              var136 = [0.0, 1.0, 0.0];
          } else {
              if (input[0] <= 11.099999904632568) {
                  if (input[5] <= 75.60000038146973) {
                      if (input[4] <= 90.89999771118164) {
                          var136 = [0.0, 0.0, 1.0];
                      } else {
                          var136 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var136 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[4] <= 88.32176971435547) {
                      var136 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[2] <= 1.7155961990356445) {
                          var136 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 113.42689895629883) {
                              var136 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[0] <= 12.976807594299316) {
                                  var136 = [1.0, 0.0, 0.0];
                              } else {
                                  var136 = [0.4, 0.0, 0.6];
                              }
                          }
                      }
                  }
              }
          }
      }
  } else {
      if (input[4] <= 91.78664779663086) {
          if (input[4] <= 83.67634963989258) {
              var136 = [0.0, 1.0, 0.0];
          } else {
              if (input[0] <= 24.2997465133667) {
                  if (input[0] <= 17.4385986328125) {
                      if (input[0] <= 15.150000095367432) {
                          var136 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[1] <= 45.5) {
                              if (input[4] <= 90.96413040161133) {
                                  var136 = [0.13333333333333333, 0.0, 0.8666666666666667];
                              } else {
                                  var136 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[4] <= 91.059814453125) {
                                  var136 = [0.15, 0.0, 0.85];
                              } else {
                                  var136 = [0.5, 0.0, 0.5];
                              }
                          }
                      }
                  } else {
                      if (input[5] <= 132.5419692993164) {
                          if (input[1] <= 45.5) {
                              if (input[0] <= 17.62563991546631) {
                                  var136 = [0.5, 0.0, 0.5];
                              } else {
                                  var136 = [0.05825242718446602, 0.0, 0.941747572815534];
                              }
                          } else {
                              if (input[0] <= 18.350000381469727) {
                                  var136 = [0.0, 0.0, 1.0];
                              } else {
                                  var136 = [0.2777777777777778, 0.0, 0.7222222222222222];
                              }
                          }
                      } else {
                          if (input[5] <= 214.8499984741211) {
                              if (input[0] <= 19.09999942779541) {
                                  var136 = [0.5, 0.0, 0.5];
                              } else {
                                  var136 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var136 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  if (input[4] <= 87.25) {
                      var136 = [0.0, 0.0, 1.0];
                  } else {
                      var136 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[1] <= 50.5) {
              var136 = [1.0, 0.0, 0.0];
          } else {
              if (input[2] <= 2.9424444437026978) {
                  if (input[5] <= 126.4744987487793) {
                      var136 = [0.0, 0.0, 1.0];
                  } else {
                      var136 = [1.0, 0.0, 0.0];
                  }
              } else {
                  var136 = [1.0, 0.0, 0.0];
              }
          }
      }
  }
  var64 = addVec(var65, var136);
  let var137: HazardVector = [0, 0, 0];
  if (input[4] <= 84.6620979309082) {
      if (input[2] <= 6.6822545528411865) {
          if (input[0] <= 23.933034896850586) {
              if (input[4] <= 81.86990356445312) {
                  var137 = [0.0, 1.0, 0.0];
              } else {
                  if (input[0] <= 11.7547607421875) {
                      if (input[1] <= 78.5) {
                          var137 = [0.0, 1.0, 0.0];
                      } else {
                          var137 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[5] <= 5.0804762840271) {
                          var137 = [0.0, 0.0, 1.0];
                      } else {
                          var137 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[5] <= 66.2592601776123) {
                  var137 = [0.0, 1.0, 0.0];
              } else {
                  var137 = [0.0, 0.0, 1.0];
              }
          }
      } else {
          if (input[0] <= 8.87079906463623) {
              if (input[2] <= 8.046332597732544) {
                  if (input[4] <= 83.66559219360352) {
                      var137 = [0.0, 1.0, 0.0];
                  } else {
                      var137 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var137 = [0.0, 0.0, 1.0];
              }
          } else {
              var137 = [0.0, 1.0, 0.0];
          }
      }
  } else {
      if (input[4] <= 91.0808334350586) {
          if (input[4] <= 85.92582321166992) {
              if (input[2] <= 5.781055688858032) {
                  if (input[2] <= 4.314414024353027) {
                      if (input[2] <= 4.141021013259888) {
                          var137 = [0.0, 0.0, 1.0];
                      } else {
                          var137 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      if (input[1] <= 57.0) {
                          var137 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[1] <= 63.0) {
                              var137 = [0.0, 1.0, 0.0];
                          } else {
                              var137 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  if (input[4] <= 85.29999923706055) {
                      if (input[4] <= 84.72171020507812) {
                          if (input[0] <= 8.660536289215088) {
                              var137 = [0.0, 0.0, 1.0];
                          } else {
                              var137 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          var137 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var137 = [0.0, 1.0, 0.0];
                  }
              }
          } else {
              if (input[0] <= 24.149999618530273) {
                  if (input[1] <= 72.5) {
                      if (input[0] <= 21.300000190734863) {
                          if (input[0] <= 21.196701049804688) {
                              if (input[5] <= 276.8522033691406) {
                                  var137 = [0.1242603550295858, 0.0, 0.8757396449704142];
                              } else {
                                  var137 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var137 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var137 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[4] <= 89.6171875) {
                          var137 = [0.0, 0.0, 1.0];
                      } else {
                          var137 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[4] <= 89.5) {
                      var137 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[0] <= 24.699999809265137) {
                          if (input[4] <= 90.29999923706055) {
                              var137 = [0.0, 0.0, 1.0];
                          } else {
                              var137 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var137 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      } else {
          if (input[5] <= 239.75) {
              if (input[1] <= 39.5) {
                  if (input[4] <= 91.26435852050781) {
                      if (input[4] <= 91.20931243896484) {
                          if (input[0] <= 22.449999809265137) {
                              var137 = [1.0, 0.0, 0.0];
                          } else {
                              var137 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var137 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[1] <= 33.5) {
                          var137 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[0] <= 20.15000057220459) {
                              var137 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[4] <= 91.45000076293945) {
                                  var137 = [0.0, 0.0, 1.0];
                              } else {
                                  var137 = [0.9705882352941176, 0.0, 0.029411764705882353];
                              }
                          }
                      }
                  }
              } else {
                  if (input[4] <= 91.95000076293945) {
                      if (input[5] <= 140.25) {
                          if (input[5] <= 106.29999923706055) {
                              if (input[0] <= 22.84999942779541) {
                                  var137 = [1.0, 0.0, 0.0];
                              } else {
                                  var137 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[4] <= 91.54999923706055) {
                                  var137 = [1.0, 0.0, 0.0];
                              } else {
                                  var137 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          var137 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var137 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              var137 = [0.0, 0.0, 1.0];
          }
      }
  }
  var63 = addVec(var64, var137);
  let var138: HazardVector = [0, 0, 0];
  if (input[4] <= 84.73189544677734) {
      if (input[0] <= 4.566897630691528) {
          var138 = [0.0, 0.0, 1.0];
      } else {
          if (input[4] <= 84.14999771118164) {
              if (input[4] <= 81.88681030273438) {
                  var138 = [0.0, 1.0, 0.0];
              } else {
                  if (input[4] <= 81.95174407958984) {
                      var138 = [0.0, 0.0, 1.0];
                  } else {
                      var138 = [0.0, 1.0, 0.0];
                  }
              }
          } else {
              if (input[1] <= 49.0) {
                  if (input[2] <= 3.2274681329727173) {
                      var138 = [0.0, 0.0, 1.0];
                  } else {
                      var138 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[4] <= 84.52977752685547) {
                      if (input[1] <= 71.0) {
                          var138 = [0.0, 1.0, 0.0];
                      } else {
                          var138 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[2] <= 5.654414415359497) {
                          var138 = [0.0, 1.0, 0.0];
                      } else {
                          var138 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          }
      }
  } else {
      if (input[0] <= 23.667651176452637) {
          if (input[2] <= 3.9587196111679077) {
              if (input[2] <= 1.339001178741455) {
                  if (input[5] <= 99.1500015258789) {
                      if (input[2] <= 0.9216743409633636) {
                          if (input[4] <= 90.70000076293945) {
                              var138 = [0.0, 0.0, 1.0];
                          } else {
                              var138 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var138 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var138 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[2] <= 2.690904974937439) {
                      if (input[4] <= 91.95000076293945) {
                          if (input[2] <= 1.8323256969451904) {
                              if (input[5] <= 128.85523986816406) {
                                  var138 = [0.05555555555555555, 0.0, 0.9444444444444444];
                              } else {
                                  var138 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[1] <= 70.5) {
                                  var138 = [0.0136986301369863, 0.0, 0.9863013698630136];
                              } else {
                                  var138 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          var138 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[2] <= 2.7124160528182983) {
                          if (input[4] <= 88.75) {
                              var138 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[4] <= 91.70000076293945) {
                                  var138 = [0.6153846153846154, 0.0, 0.38461538461538464];
                              } else {
                                  var138 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[4] <= 92.0) {
                              if (input[0] <= 16.82259178161621) {
                                  var138 = [0.13513513513513514, 0.0, 0.8648648648648649];
                              } else {
                                  var138 = [0.01818181818181818, 0.0, 0.9818181818181818];
                              }
                          } else {
                              var138 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          } else {
              if (input[5] <= 33.04999923706055) {
                  if (input[5] <= 25.550000190734863) {
                      if (input[4] <= 86.33476257324219) {
                          if (input[0] <= 4.950000047683716) {
                              var138 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[5] <= 18.341262817382812) {
                                  var138 = [0.0, 0.14285714285714285, 0.8571428571428571];
                              } else {
                                  var138 = [0.0, 1.0, 0.0];
                              }
                          }
                      } else {
                          var138 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var138 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[0] <= 14.990368366241455) {
                      if (input[0] <= 11.099999904632568) {
                          if (input[4] <= 90.20000076293945) {
                              var138 = [0.0, 0.0, 1.0];
                          } else {
                              var138 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[0] <= 11.727837085723877) {
                              var138 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[4] <= 90.99492645263672) {
                                  var138 = [0.1875, 0.0, 0.8125];
                              } else {
                                  var138 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              }
                          }
                      }
                  } else {
                      if (input[4] <= 89.8677978515625) {
                          var138 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[2] <= 4.700000047683716) {
                              if (input[5] <= 116.6500015258789) {
                                  var138 = [0.7692307692307693, 0.0, 0.23076923076923078];
                              } else {
                                  var138 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[2] <= 5.6000001430511475) {
                                  var138 = [1.0, 0.0, 0.0];
                              } else {
                                  var138 = [0.9705882352941176, 0.0, 0.029411764705882353];
                              }
                          }
                      }
                  }
              }
          }
      } else {
          var138 = [1.0, 0.0, 0.0];
      }
  }
  var62 = addVec(var63, var138);
  let var139: HazardVector = [0, 0, 0];
  if (input[4] <= 85.68462371826172) {
      if (input[0] <= 4.580510377883911) {
          var139 = [0.0, 0.0, 1.0];
      } else {
          if (input[1] <= 35.5) {
              if (input[2] <= 4.060024976730347) {
                  if (input[5] <= 18.762969255447388) {
                      var139 = [0.0, 1.0, 0.0];
                  } else {
                      var139 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[0] <= 17.978602409362793) {
                      var139 = [0.0, 1.0, 0.0];
                  } else {
                      var139 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[5] <= 3.542267680168152) {
                  if (input[0] <= 6.661481857299805) {
                      var139 = [0.0, 1.0, 0.0];
                  } else {
                      var139 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[0] <= 6.659921646118164) {
                      if (input[5] <= 26.81865692138672) {
                          var139 = [0.0, 1.0, 0.0];
                      } else {
                          var139 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[2] <= 6.692332983016968) {
                          if (input[2] <= 4.808747053146362) {
                              if (input[0] <= 6.754234790802002) {
                                  var139 = [1.0, 0.0, 0.0];
                              } else {
                                  var139 = [0.0, 0.9900990099009901, 0.009900990099009901];
                              }
                          } else {
                              if (input[4] <= 84.37068939208984) {
                                  var139 = [0.0, 1.0, 0.0];
                              } else {
                                  var139 = [0.0, 0.3333333333333333, 0.6666666666666666];
                              }
                          }
                      } else {
                          var139 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          }
      }
  } else {
      if (input[5] <= 129.8000030517578) {
          if (input[0] <= 23.84999942779541) {
              if (input[2] <= 4.477004528045654) {
                  if (input[2] <= 3.0922863483428955) {
                      if (input[2] <= 1.0999999642372131) {
                          if (input[0] <= 16.699999809265137) {
                              var139 = [1.0, 0.0, 0.0];
                          } else {
                              var139 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[4] <= 91.97734832763672) {
                              if (input[0] <= 19.138952255249023) {
                                  var139 = [0.09375, 0.0, 0.90625];
                              } else {
                                  var139 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var139 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[5] <= 85.08585739135742) {
                          if (input[4] <= 91.06366348266602) {
                              var139 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[0] <= 17.050000190734863) {
                                  var139 = [0.75, 0.0, 0.25];
                              } else {
                                  var139 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[4] <= 92.0) {
                              if (input[0] <= 22.012042999267578) {
                                  var139 = [0.03571428571428571, 0.0, 0.9642857142857143];
                              } else {
                                  var139 = [0.5714285714285714, 0.0, 0.42857142857142855];
                              }
                          } else {
                              var139 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  if (input[2] <= 4.974814414978027) {
                      if (input[5] <= 35.60000038146973) {
                          if (input[5] <= 34.35000038146973) {
                              if (input[2] <= 4.585421562194824) {
                                  var139 = [1.0, 0.0, 0.0];
                              } else {
                                  var139 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var139 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[4] <= 90.41779708862305) {
                              var139 = [0.0, 0.0, 1.0];
                          } else {
                              var139 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[4] <= 88.3499984741211) {
                          if (input[5] <= 20.40000057220459) {
                              var139 = [1.0, 0.0, 0.0];
                          } else {
                              var139 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[0] <= 14.299999713897705) {
                              if (input[1] <= 39.5) {
                                  var139 = [1.0, 0.0, 0.0];
                              } else {
                                  var139 = [0.25, 0.0, 0.75];
                              }
                          } else {
                              if (input[4] <= 90.47288131713867) {
                                  var139 = [0.7777777777777778, 0.0, 0.2222222222222222];
                              } else {
                                  var139 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              }
          } else {
              if (input[1] <= 41.0) {
                  var139 = [1.0, 0.0, 0.0];
              } else {
                  if (input[4] <= 90.29999923706055) {
                      var139 = [0.0, 0.0, 1.0];
                  } else {
                      var139 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[0] <= 21.0090389251709) {
              if (input[4] <= 91.70000076293945) {
                  if (input[1] <= 39.5) {
                      if (input[1] <= 38.0) {
                          var139 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[4] <= 90.96413040161133) {
                              var139 = [0.0, 0.0, 1.0];
                          } else {
                              var139 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[2] <= 4.049999952316284) {
                          if (input[0] <= 16.82259178161621) {
                              if (input[2] <= 2.899999976158142) {
                                  var139 = [1.0, 0.0, 0.0];
                              } else {
                                  var139 = [0.4, 0.0, 0.6];
                              }
                          } else {
                              if (input[2] <= 2.2462528944015503) {
                                  var139 = [0.25, 0.0, 0.75];
                              } else {
                                  var139 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[2] <= 5.366742849349976) {
                              if (input[2] <= 5.116742849349976) {
                                  var139 = [1.0, 0.0, 0.0];
                              } else {
                                  var139 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var139 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  var139 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[0] <= 22.550000190734863) {
                  if (input[4] <= 91.09514617919922) {
                      var139 = [0.0, 0.0, 1.0];
                  } else {
                      var139 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[5] <= 247.10000610351562) {
                      var139 = [1.0, 0.0, 0.0];
                  } else {
                      var139 = [0.0, 0.0, 1.0];
                  }
              }
          }
      }
  }
  var61 = addVec(var62, var139);
  let var140: HazardVector = [0, 0, 0];
  if (input[4] <= 84.58238983154297) {
      if (input[1] <= 36.5) {
          if (input[5] <= 66.2592601776123) {
              var140 = [0.0, 1.0, 0.0];
          } else {
              var140 = [0.0, 0.0, 1.0];
          }
      } else {
          if (input[4] <= 84.13443374633789) {
              if (input[2] <= 7.349999904632568) {
                  if (input[5] <= 3.332324981689453) {
                      if (input[0] <= 9.27065896987915) {
                          var140 = [0.0, 1.0, 0.0];
                      } else {
                          var140 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[5] <= 4.551283836364746) {
                          if (input[4] <= 82.52257919311523) {
                              var140 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[0] <= 8.648969173431396) {
                                  var140 = [0.0, 1.0, 0.0];
                              } else {
                                  var140 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          var140 = [0.0, 1.0, 0.0];
                      }
                  }
              } else {
                  var140 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[2] <= 6.523806810379028) {
                  if (input[5] <= 7.33432674407959) {
                      var140 = [1.0, 0.0, 0.0];
                  } else {
                      var140 = [0.0, 1.0, 0.0];
                  }
              } else {
                  var140 = [0.0, 0.0, 1.0];
              }
          }
      }
  } else {
      if (input[1] <= 36.5) {
          if (input[1] <= 21.5) {
              if (input[1] <= 20.0) {
                  var140 = [1.0, 0.0, 0.0];
              } else {
                  if (input[5] <= 79.35000133514404) {
                      var140 = [0.0, 1.0, 0.0];
                  } else {
                      var140 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[5] <= 109.79999923706055) {
                  if (input[0] <= 23.949999809265137) {
                      if (input[5] <= 99.29999923706055) {
                          if (input[0] <= 23.26967144012451) {
                              if (input[1] <= 34.0) {
                                  var140 = [0.46511627906976744, 0.023255813953488372, 0.5116279069767442];
                              } else {
                                  var140 = [0.8461538461538461, 0.0, 0.15384615384615385];
                              }
                          } else {
                              var140 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[2] <= 3.549999952316284) {
                              var140 = [0.0, 0.0, 1.0];
                          } else {
                              var140 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      var140 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[2] <= 2.450000047683716) {
                      if (input[2] <= 2.0) {
                          var140 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[0] <= 23.5) {
                              if (input[5] <= 124.25) {
                                  var140 = [1.0, 0.0, 0.0];
                              } else {
                                  var140 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var140 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      var140 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[4] <= 91.95000076293945) {
              if (input[2] <= 5.366742849349976) {
                  if (input[4] <= 91.09317016601562) {
                      if (input[0] <= 25.25) {
                          if (input[0] <= 15.150000095367432) {
                              if (input[4] <= 89.16718673706055) {
                                  var140 = [0.0, 0.08928571428571429, 0.9107142857142857];
                              } else {
                                  var140 = [0.55, 0.0, 0.45];
                              }
                          } else {
                              var140 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var140 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[5] <= 214.8499984741211) {
                          if (input[5] <= 122.20000457763672) {
                              if (input[5] <= 106.29999923706055) {
                                  var140 = [0.6363636363636364, 0.0, 0.36363636363636365];
                              } else {
                                  var140 = [0.10714285714285714, 0.0, 0.8928571428571429];
                              }
                          } else {
                              var140 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var140 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  if (input[0] <= 14.149999618530273) {
                      if (input[0] <= 11.25) {
                          if (input[1] <= 51.5) {
                              if (input[4] <= 89.25) {
                                  var140 = [0.0, 0.0, 1.0];
                              } else {
                                  var140 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var140 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[0] <= 12.850000381469727) {
                              if (input[1] <= 46.5) {
                                  var140 = [0.3333333333333333, 0.0, 0.6666666666666666];
                              } else {
                                  var140 = [0.8333333333333334, 0.16666666666666666, 0.0];
                              }
                          } else {
                              if (input[1] <= 70.0) {
                                  var140 = [0.0, 0.0, 1.0];
                              } else {
                                  var140 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      if (input[5] <= 126.64999771118164) {
                          if (input[1] <= 53.0) {
                              if (input[1] <= 42.5) {
                                  var140 = [1.0, 0.0, 0.0];
                              } else {
                                  var140 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var140 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var140 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              var140 = [1.0, 0.0, 0.0];
          }
      }
  }
  var60 = addVec(var61, var140);
  let var141: HazardVector = [0, 0, 0];
  if (input[4] <= 85.60000228881836) {
      if (input[0] <= 4.580510377883911) {
          var141 = [0.0, 0.0, 1.0];
      } else {
          if (input[4] <= 84.16878128051758) {
              if (input[0] <= 5.1041319370269775) {
                  if (input[1] <= 62.5) {
                      if (input[1] <= 60.0) {
                          var141 = [0.0, 1.0, 0.0];
                      } else {
                          var141 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var141 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[5] <= 3.353793144226074) {
                      if (input[1] <= 49.5) {
                          var141 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[0] <= 9.279087543487549) {
                              var141 = [0.0, 1.0, 0.0];
                          } else {
                              var141 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[0] <= 12.052922248840332) {
                          if (input[1] <= 73.5) {
                              var141 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[0] <= 11.78834581375122) {
                                  var141 = [0.0, 1.0, 0.0];
                              } else {
                                  var141 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          var141 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[5] <= 25.951984405517578) {
                  if (input[4] <= 84.23530197143555) {
                      var141 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[0] <= 9.021132469177246) {
                          if (input[1] <= 33.5) {
                              var141 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[2] <= 5.713831901550293) {
                                  var141 = [0.0, 0.8333333333333334, 0.16666666666666666];
                              } else {
                                  var141 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[0] <= 13.275310039520264) {
                              if (input[5] <= 10.77422046661377) {
                                  var141 = [0.0, 0.0, 1.0];
                              } else {
                                  var141 = [0.0, 1.0, 0.0];
                              }
                          } else {
                              var141 = [0.0, 1.0, 0.0];
                          }
                      }
                  }
              } else {
                  var141 = [0.0, 0.0, 1.0];
              }
          }
      }
  } else {
      if (input[5] <= 129.8000030517578) {
          if (input[4] <= 91.78664779663086) {
              if (input[4] <= 91.08585739135742) {
                  if (input[4] <= 88.57223129272461) {
                      if (input[4] <= 86.18634796142578) {
                          if (input[2] <= 6.248931407928467) {
                              var141 = [0.0, 0.0, 1.0];
                          } else {
                              var141 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          if (input[5] <= 15.350000381469727) {
                              if (input[2] <= 4.450000047683716) {
                                  var141 = [0.0, 0.0, 1.0];
                              } else {
                                  var141 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var141 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[2] <= 4.844913005828857) {
                          if (input[1] <= 65.5) {
                              if (input[5] <= 42.10158157348633) {
                                  var141 = [0.09090909090909091, 0.0, 0.9090909090909091];
                              } else {
                                  var141 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[0] <= 15.108386039733887) {
                                  var141 = [0.5, 0.0, 0.5];
                              } else {
                                  var141 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[5] <= 100.4000015258789) {
                              if (input[4] <= 90.14999771118164) {
                                  var141 = [0.625, 0.0, 0.375];
                              } else {
                                  var141 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var141 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  if (input[5] <= 97.17044067382812) {
                      if (input[0] <= 19.667810440063477) {
                          var141 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[1] <= 41.5) {
                              var141 = [0.0, 0.0, 1.0];
                          } else {
                              var141 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[1] <= 42.5) {
                          if (input[1] <= 41.5) {
                              if (input[4] <= 91.41435623168945) {
                                  var141 = [0.0, 0.0, 1.0];
                              } else {
                                  var141 = [0.25, 0.0, 0.75];
                              }
                          } else {
                              var141 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var141 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          } else {
              if (input[4] <= 92.0) {
                  if (input[2] <= 2.899999976158142) {
                      var141 = [1.0, 0.0, 0.0];
                  } else {
                      var141 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var141 = [1.0, 0.0, 0.0];
              }
          }
      } else {
          if (input[5] <= 243.29999542236328) {
              if (input[4] <= 88.55000305175781) {
                  var141 = [0.0, 0.0, 1.0];
              } else {
                  if (input[5] <= 138.75) {
                      if (input[4] <= 91.0808334350586) {
                          var141 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 137.5500030517578) {
                              var141 = [1.0, 0.0, 0.0];
                          } else {
                              var141 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      var141 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[4] <= 90.45000076293945) {
                  if (input[2] <= 3.475687861442566) {
                      if (input[1] <= 61.0) {
                          var141 = [0.0, 0.0, 1.0];
                      } else {
                          var141 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var141 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[1] <= 67.0) {
                      var141 = [0.0, 0.0, 1.0];
                  } else {
                      var141 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  }
  var59 = addVec(var60, var141);
  let var142: HazardVector = [0, 0, 0];
  if (input[0] <= 15.073886394500732) {
      if (input[4] <= 84.66106796264648) {
          if (input[2] <= 6.631026029586792) {
              if (input[2] <= 2.895801305770874) {
                  if (input[2] <= 2.8612582683563232) {
                      if (input[5] <= 3.332324981689453) {
                          if (input[1] <= 87.0) {
                              var142 = [0.0, 0.0, 1.0];
                          } else {
                              var142 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          var142 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      var142 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var142 = [0.0, 1.0, 0.0];
              }
          } else {
              if (input[5] <= 24.94009017944336) {
                  if (input[4] <= 83.6600112915039) {
                      var142 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[1] <= 42.5) {
                          var142 = [0.0, 1.0, 0.0];
                      } else {
                          var142 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  var142 = [0.0, 0.0, 1.0];
              }
          }
      } else {
          if (input[1] <= 24.5) {
              var142 = [0.0, 1.0, 0.0];
          } else {
              if (input[1] <= 72.5) {
                  if (input[4] <= 91.0999984741211) {
                      if (input[4] <= 84.7277717590332) {
                          if (input[1] <= 59.5) {
                              if (input[2] <= 4.450000047683716) {
                                  var142 = [0.0, 1.0, 0.0];
                              } else {
                                  var142 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[1] <= 65.5) {
                                  var142 = [0.0, 1.0, 0.0];
                              } else {
                                  var142 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[0] <= 13.326807498931885) {
                              if (input[0] <= 13.25) {
                                  var142 = [0.11475409836065574, 0.03278688524590164, 0.8524590163934426];
                              } else {
                                  var142 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[4] <= 90.2322883605957) {
                                  var142 = [0.06666666666666667, 0.0, 0.9333333333333333];
                              } else {
                                  var142 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  } else {
                      var142 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[2] <= 5.805514335632324) {
                      if (input[5] <= 144.94651794433594) {
                          var142 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[0] <= 12.599999904632568) {
                              var142 = [1.0, 0.0, 0.0];
                          } else {
                              var142 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      var142 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  } else {
      if (input[2] <= 4.477004528045654) {
          if (input[4] <= 91.95000076293945) {
              if (input[5] <= 71.0) {
                  if (input[4] <= 83.25) {
                      var142 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[2] <= 2.102959156036377) {
                          var142 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 46.10000038146973) {
                              if (input[0] <= 18.100000381469727) {
                                  var142 = [0.0, 0.0, 1.0];
                              } else {
                                  var142 = [0.18181818181818182, 0.0, 0.8181818181818182];
                              }
                          } else {
                              var142 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  if (input[4] <= 91.09317016601562) {
                      if (input[0] <= 25.099746704101562) {
                          if (input[2] <= 3.5287898778915405) {
                              var142 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[2] <= 3.651846170425415) {
                                  var142 = [0.125, 0.0, 0.875];
                              } else {
                                  var142 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[5] <= 215.0) {
                              var142 = [1.0, 0.0, 0.0];
                          } else {
                              var142 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[1] <= 40.5) {
                          if (input[5] <= 119.25000381469727) {
                              if (input[1] <= 26.0) {
                                  var142 = [0.0, 0.0, 1.0];
                              } else {
                                  var142 = [0.5, 0.0, 0.5];
                              }
                          } else {
                              var142 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[5] <= 106.29999923706055) {
                              var142 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[1] <= 43.5) {
                                  var142 = [0.2857142857142857, 0.0, 0.7142857142857143];
                              } else {
                                  var142 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              }
          } else {
              var142 = [1.0, 0.0, 0.0];
          }
      } else {
          if (input[1] <= 68.0) {
              if (input[5] <= 66.96475982666016) {
                  if (input[5] <= 54.0) {
                      if (input[2] <= 5.522733449935913) {
                          if (input[5] <= 17.431263089179993) {
                              var142 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[4] <= 83.95489120483398) {
                                  var142 = [0.0, 1.0, 0.0];
                              } else {
                                  var142 = [0.6363636363636364, 0.0, 0.36363636363636365];
                              }
                          }
                      } else {
                          if (input[5] <= 31.26360321044922) {
                              var142 = [0.0, 0.0, 1.0];
                          } else {
                              var142 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      var142 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[5] <= 111.04999923706055) {
                      if (input[4] <= 90.48479080200195) {
                          if (input[2] <= 6.25) {
                              var142 = [0.0, 0.0, 1.0];
                          } else {
                              var142 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var142 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var142 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[4] <= 86.70000076293945) {
                  var142 = [0.0, 1.0, 0.0];
              } else {
                  var142 = [1.0, 0.0, 0.0];
              }
          }
      }
  }
  var58 = addVec(var59, var142);
  let var143: HazardVector = [0, 0, 0];
  if (input[5] <= 72.0999984741211) {
      if (input[4] <= 84.6620979309082) {
          if (input[2] <= 7.426400423049927) {
              if (input[1] <= 73.5) {
                  var143 = [0.0, 1.0, 0.0];
              } else {
                  if (input[1] <= 74.5) {
                      if (input[0] <= 8.579371690750122) {
                          var143 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[5] <= 27.5863516330719) {
                              var143 = [0.0, 0.0, 1.0];
                          } else {
                              var143 = [0.0, 1.0, 0.0];
                          }
                      }
                  } else {
                      var143 = [0.0, 1.0, 0.0];
                  }
              }
          } else {
              var143 = [0.0, 0.0, 1.0];
          }
      } else {
          if (input[1] <= 23.0) {
              if (input[4] <= 88.54999923706055) {
                  var143 = [0.0, 1.0, 0.0];
              } else {
                  var143 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[5] <= 57.19999885559082) {
                  if (input[4] <= 90.80570983886719) {
                      if (input[1] <= 51.5) {
                          if (input[4] <= 84.87357711791992) {
                              var143 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[1] <= 38.5) {
                                  var143 = [0.0, 0.0, 1.0];
                              } else {
                                  var143 = [0.0392156862745098, 0.0, 0.9607843137254902];
                              }
                          }
                      } else {
                          if (input[2] <= 3.3499999046325684) {
                              var143 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[4] <= 87.97582244873047) {
                                  var143 = [0.0, 0.14285714285714285, 0.8571428571428571];
                              } else {
                                  var143 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      if (input[0] <= 17.627436637878418) {
                          if (input[0] <= 15.849999904632568) {
                              var143 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[0] <= 16.0) {
                                  var143 = [0.0, 0.0, 1.0];
                              } else {
                                  var143 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[0] <= 17.92743682861328) {
                              var143 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[1] <= 35.5) {
                                  var143 = [1.0, 0.0, 0.0];
                              } else {
                                  var143 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              } else {
                  var143 = [1.0, 0.0, 0.0];
              }
          }
      }
  } else {
      if (input[1] <= 30.5) {
          if (input[5] <= 105.11684799194336) {
              if (input[4] <= 91.70931243896484) {
                  var143 = [0.0, 0.0, 1.0];
              } else {
                  var143 = [1.0, 0.0, 0.0];
              }
          } else {
              var143 = [1.0, 0.0, 0.0];
          }
      } else {
          if (input[2] <= 3.959672212600708) {
              if (input[5] <= 239.75) {
                  if (input[5] <= 136.9499969482422) {
                      if (input[4] <= 92.0) {
                          if (input[0] <= 24.799999237060547) {
                              if (input[5] <= 129.8000030517578) {
                                  var143 = [0.10638297872340426, 0.0, 0.8936170212765957];
                              } else {
                                  var143 = [0.5, 0.0, 0.5];
                              }
                          } else {
                              var143 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var143 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[1] <= 61.0) {
                          var143 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[0] <= 17.65000057220459) {
                              var143 = [0.0, 0.0, 1.0];
                          } else {
                              var143 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  if (input[0] <= 16.40000057220459) {
                      var143 = [1.0, 0.0, 0.0];
                  } else {
                      var143 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[0] <= 18.868185997009277) {
                  if (input[5] <= 141.17286682128906) {
                      if (input[4] <= 91.97840881347656) {
                          if (input[5] <= 102.6500015258789) {
                              if (input[4] <= 90.14999771118164) {
                                  var143 = [0.2857142857142857, 0.0, 0.7142857142857143];
                              } else {
                                  var143 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[2] <= 4.700000047683716) {
                                  var143 = [0.0, 0.0, 1.0];
                              } else {
                                  var143 = [0.18181818181818182, 0.0, 0.8181818181818182];
                              }
                          }
                      } else {
                          var143 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var143 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[0] <= 22.399999618530273) {
                      if (input[0] <= 21.331899642944336) {
                          if (input[4] <= 90.42288208007812) {
                              if (input[1] <= 47.0) {
                                  var143 = [0.25, 0.0, 0.75];
                              } else {
                                  var143 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var143 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[5] <= 86.22087097167969) {
                              var143 = [0.0, 0.0, 1.0];
                          } else {
                              var143 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      var143 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  }
  var57 = addVec(var58, var143);
  let var144: HazardVector = [0, 0, 0];
  if (input[5] <= 71.493408203125) {
      if (input[4] <= 84.73189544677734) {
          if (input[1] <= 53.5) {
              var144 = [0.0, 1.0, 0.0];
          } else {
              if (input[5] <= 3.332324981689453) {
                  if (input[4] <= 62.09445381164551) {
                      var144 = [0.0, 1.0, 0.0];
                  } else {
                      var144 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[2] <= 6.705887317657471) {
                      if (input[0] <= 7.454452276229858) {
                          var144 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[4] <= 84.33849716186523) {
                              if (input[4] <= 82.21950149536133) {
                                  var144 = [0.0, 1.0, 0.0];
                              } else {
                                  var144 = [0.0, 0.9090909090909091, 0.09090909090909091];
                              }
                          } else {
                              var144 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      var144 = [0.0, 0.0, 1.0];
                  }
              }
          }
      } else {
          if (input[2] <= 8.25) {
              if (input[5] <= 33.04999923706055) {
                  if (input[4] <= 90.25) {
                      if (input[5] <= 15.350000381469727) {
                          if (input[2] <= 5.475009202957153) {
                              var144 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[5] <= 10.153080940246582) {
                                  var144 = [0.0, 0.0, 1.0];
                              } else {
                                  var144 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          var144 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var144 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[5] <= 36.85000038146973) {
                      if (input[4] <= 91.14999771118164) {
                          var144 = [0.0, 0.0, 1.0];
                      } else {
                          var144 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[0] <= 24.699999809265137) {
                          if (input[5] <= 57.19999885559082) {
                              if (input[2] <= 4.92700457572937) {
                                  var144 = [0.09302325581395349, 0.0, 0.9069767441860465];
                              } else {
                                  var144 = [0.47058823529411764, 0.0, 0.5294117647058824];
                              }
                          } else {
                              var144 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var144 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[0] <= 9.149999856948853) {
                  var144 = [0.0, 1.0, 0.0];
              } else {
                  var144 = [1.0, 0.0, 0.0];
              }
          }
      }
  } else {
      if (input[4] <= 91.78664779663086) {
          if (input[2] <= 3.959672212600708) {
              if (input[0] <= 14.25) {
                  if (input[0] <= 8.900000095367432) {
                      var144 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[1] <= 76.0) {
                          if (input[5] <= 141.14999389648438) {
                              if (input[1] <= 46.0) {
                                  var144 = [0.0, 0.0, 1.0];
                              } else {
                                  var144 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var144 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var144 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  if (input[4] <= 91.4671630859375) {
                      if (input[0] <= 25.09999942779541) {
                          var144 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[0] <= 27.59999942779541) {
                              var144 = [1.0, 0.0, 0.0];
                          } else {
                              var144 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[1] <= 43.5) {
                          if (input[0] <= 17.84999942779541) {
                              var144 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[1] <= 36.0) {
                                  var144 = [1.0, 0.0, 0.0];
                              } else {
                                  var144 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[5] <= 147.8000030517578) {
                              var144 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[1] <= 53.0) {
                                  var144 = [1.0, 0.0, 0.0];
                              } else {
                                  var144 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              }
          } else {
              if (input[5] <= 139.67286682128906) {
                  if (input[5] <= 100.4000015258789) {
                      if (input[4] <= 88.09837341308594) {
                          var144 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[4] <= 90.14999771118164) {
                              if (input[2] <= 4.950000047683716) {
                                  var144 = [0.0, 0.0, 1.0];
                              } else {
                                  var144 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var144 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[2] <= 4.832783460617065) {
                          var144 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[4] <= 91.25) {
                              var144 = [0.0, 0.0, 1.0];
                          } else {
                              var144 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  var144 = [1.0, 0.0, 0.0];
              }
          }
      } else {
          if (input[5] <= 113.54999923706055) {
              if (input[5] <= 111.42449569702148) {
                  if (input[4] <= 91.97258377075195) {
                      if (input[0] <= 17.510193824768066) {
                          var144 = [0.0, 0.0, 1.0];
                      } else {
                          var144 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var144 = [1.0, 0.0, 0.0];
                  }
              } else {
                  var144 = [0.0, 0.0, 1.0];
              }
          } else {
              var144 = [1.0, 0.0, 0.0];
          }
      }
  }
  var56 = addVec(var57, var144);
  let var145: HazardVector = [0, 0, 0];
  if (input[1] <= 36.5) {
      if (input[2] <= 6.393724203109741) {
          if (input[0] <= 18.449999809265137) {
              if (input[4] <= 91.05570983886719) {
                  if (input[4] <= 84.38399887084961) {
                      var145 = [0.0, 1.0, 0.0];
                  } else {
                      var145 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var145 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[5] <= 109.79999923706055) {
                  if (input[5] <= 61.2913703918457) {
                      if (input[2] <= 4.062376499176025) {
                          var145 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[2] <= 5.252848386764526) {
                              if (input[4] <= 86.3557243347168) {
                                  var145 = [0.0, 1.0, 0.0];
                              } else {
                                  var145 = [0.2, 0.0, 0.8];
                              }
                          } else {
                              var145 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[5] <= 99.29999923706055) {
                          if (input[0] <= 23.26967144012451) {
                              var145 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[1] <= 27.5) {
                                  var145 = [1.0, 0.0, 0.0];
                              } else {
                                  var145 = [0.16666666666666666, 0.0, 0.8333333333333334];
                              }
                          }
                      } else {
                          if (input[1] <= 32.5) {
                              if (input[1] <= 26.0) {
                                  var145 = [0.0, 0.0, 1.0];
                              } else {
                                  var145 = [0.8571428571428571, 0.0, 0.14285714285714285];
                              }
                          } else {
                              if (input[1] <= 34.5) {
                                  var145 = [0.0, 0.0, 1.0];
                              } else {
                                  var145 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[5] <= 129.8000030517578) {
                      if (input[5] <= 128.29999923706055) {
                          var145 = [1.0, 0.0, 0.0];
                      } else {
                          var145 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var145 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[0] <= 12.168828010559082) {
              if (input[4] <= 89.4000015258789) {
                  var145 = [0.0, 1.0, 0.0];
              } else {
                  var145 = [1.0, 0.0, 0.0];
              }
          } else {
              var145 = [1.0, 0.0, 0.0];
          }
      }
  } else {
      if (input[1] <= 66.5) {
          if (input[4] <= 84.58483505249023) {
              if (input[2] <= 7.2854368686676025) {
                  var145 = [0.0, 1.0, 0.0];
              } else {
                  var145 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[0] <= 18.166733741760254) {
                  if (input[4] <= 92.0) {
                      if (input[0] <= 6.528637886047363) {
                          if (input[1] <= 57.0) {
                              var145 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[0] <= 3.945391535758972) {
                                  var145 = [0.0, 0.0, 1.0];
                              } else {
                                  var145 = [0.0, 1.0, 0.0];
                              }
                          }
                      } else {
                          if (input[5] <= 129.8000030517578) {
                              if (input[2] <= 5.7493040561676025) {
                                  var145 = [0.03418803418803419, 0.017094017094017096, 0.9487179487179487];
                              } else {
                                  var145 = [0.2727272727272727, 0.045454545454545456, 0.6818181818181818];
                              }
                          } else {
                              if (input[4] <= 90.96413040161133) {
                                  var145 = [0.14285714285714285, 0.0, 0.8571428571428571];
                              } else {
                                  var145 = [0.8888888888888888, 0.0, 0.1111111111111111];
                              }
                          }
                      }
                  } else {
                      var145 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[4] <= 91.95000076293945) {
                      if (input[0] <= 23.646644592285156) {
                          if (input[2] <= 4.562565565109253) {
                              if (input[5] <= 104.34992218017578) {
                                  var145 = [0.28125, 0.0, 0.71875];
                              } else {
                                  var145 = [0.07407407407407407, 0.0, 0.9259259259259259];
                              }
                          } else {
                              if (input[4] <= 90.48479080200195) {
                                  var145 = [0.4444444444444444, 0.0, 0.5555555555555556];
                              } else {
                                  var145 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          var145 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var145 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[0] <= 9.69279670715332) {
              if (input[4] <= 84.39999771118164) {
                  var145 = [0.0, 1.0, 0.0];
              } else {
                  if (input[4] <= 88.20000076293945) {
                      var145 = [0.0, 0.0, 1.0];
                  } else {
                      var145 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[4] <= 81.88681030273438) {
                  var145 = [0.0, 1.0, 0.0];
              } else {
                  if (input[0] <= 14.75) {
                      if (input[5] <= 59.900001525878906) {
                          var145 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[4] <= 89.16718673706055) {
                              if (input[5] <= 118.14652252197266) {
                                  var145 = [1.0, 0.0, 0.0];
                              } else {
                                  var145 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[1] <= 71.5) {
                                  var145 = [0.0, 0.0, 1.0];
                              } else {
                                  var145 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      var145 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  }
  var55 = addVec(var56, var145);
  let var146: HazardVector = [0, 0, 0];
  if (input[5] <= 71.493408203125) {
      if (input[1] <= 56.5) {
          if (input[1] <= 24.5) {
              if (input[4] <= 88.0) {
                  var146 = [0.0, 1.0, 0.0];
              } else {
                  var146 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[0] <= 15.187127113342285) {
                  if (input[2] <= 7.360508441925049) {
                      if (input[5] <= 15.45958423614502) {
                          if (input[5] <= 9.564534187316895) {
                              if (input[4] <= 84.71780395507812) {
                                  var146 = [0.0, 1.0, 0.0];
                              } else {
                                  var146 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[4] <= 85.50019836425781) {
                                  var146 = [0.0, 1.0, 0.0];
                              } else {
                                  var146 = [0.25, 0.0, 0.75];
                              }
                          }
                      } else {
                          if (input[5] <= 51.53948974609375) {
                              if (input[0] <= 9.864906787872314) {
                                  var146 = [0.1111111111111111, 0.5555555555555556, 0.3333333333333333];
                              } else {
                                  var146 = [0.21739130434782608, 0.21739130434782608, 0.5652173913043478];
                              }
                          } else {
                              var146 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[4] <= 88.0999984741211) {
                          var146 = [0.0, 0.0, 1.0];
                      } else {
                          var146 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[2] <= 4.477004528045654) {
                      if (input[4] <= 83.49124145507812) {
                          var146 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[5] <= 56.75) {
                              var146 = [0.0, 0.0, 1.0];
                          } else {
                              var146 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[2] <= 5.478316783905029) {
                          if (input[5] <= 47.93973922729492) {
                              if (input[4] <= 83.95489120483398) {
                                  var146 = [0.0, 1.0, 0.0];
                              } else {
                                  var146 = [0.3333333333333333, 0.0, 0.6666666666666666];
                              }
                          } else {
                              var146 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[1] <= 29.5) {
                              if (input[4] <= 90.10453414916992) {
                                  var146 = [0.0, 0.0, 1.0];
                              } else {
                                  var146 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var146 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          }
      } else {
          if (input[5] <= 8.981738567352295) {
              if (input[0] <= 11.045134544372559) {
                  if (input[4] <= 84.14999771118164) {
                      var146 = [0.0, 1.0, 0.0];
                  } else {
                      var146 = [1.0, 0.0, 0.0];
                  }
              } else {
                  var146 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[4] <= 84.64999771118164) {
                  if (input[0] <= 4.950000047683716) {
                      var146 = [0.0, 0.0, 1.0];
                  } else {
                      var146 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[1] <= 75.5) {
                      if (input[4] <= 88.79999923706055) {
                          if (input[5] <= 22.752087593078613) {
                              var146 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[0] <= 3.945391535758972) {
                                  var146 = [0.0, 0.0, 1.0];
                              } else {
                                  var146 = [0.0, 0.8, 0.2];
                              }
                          }
                      } else {
                          var146 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var146 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  } else {
      if (input[4] <= 91.78664779663086) {
          if (input[5] <= 129.8000030517578) {
              if (input[4] <= 91.09317016601562) {
                  if (input[1] <= 71.5) {
                      if (input[0] <= 20.503747940063477) {
                          if (input[0] <= 19.93334674835205) {
                              if (input[5] <= 109.61520004272461) {
                                  var146 = [0.09090909090909091, 0.0, 0.9090909090909091];
                              } else {
                                  var146 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var146 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var146 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[2] <= 3.965596318244934) {
                          var146 = [0.0, 0.0, 1.0];
                      } else {
                          var146 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[4] <= 91.20571517944336) {
                      if (input[4] <= 91.14999771118164) {
                          if (input[0] <= 23.09999942779541) {
                              var146 = [1.0, 0.0, 0.0];
                          } else {
                              var146 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var146 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[5] <= 106.29999923706055) {
                          if (input[4] <= 91.41435623168945) {
                              var146 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[2] <= 1.5499999523162842) {
                                  var146 = [0.0, 0.0, 1.0];
                              } else {
                                  var146 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          var146 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          } else {
              if (input[0] <= 23.25) {
                  if (input[1] <= 39.5) {
                      if (input[4] <= 91.11413192749023) {
                          var146 = [0.0, 0.0, 1.0];
                      } else {
                          var146 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[2] <= 3.799999952316284) {
                          if (input[5] <= 130.24197387695312) {
                              var146 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[0] <= 16.40000057220459) {
                                  var146 = [0.4, 0.0, 0.6];
                              } else {
                                  var146 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[0] <= 14.11050796508789) {
                              if (input[4] <= 90.16674423217773) {
                                  var146 = [0.0, 0.0, 1.0];
                              } else {
                                  var146 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var146 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  if (input[1] <= 30.0) {
                      var146 = [0.0, 0.0, 1.0];
                  } else {
                      var146 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[0] <= 16.759614944458008) {
              if (input[0] <= 16.659615516662598) {
                  if (input[4] <= 91.97258377075195) {
                      var146 = [0.0, 0.0, 1.0];
                  } else {
                      var146 = [1.0, 0.0, 0.0];
                  }
              } else {
                  var146 = [0.0, 0.0, 1.0];
              }
          } else {
              var146 = [1.0, 0.0, 0.0];
          }
      }
  }
  var54 = addVec(var55, var146);
  let var147: HazardVector = [0, 0, 0];
  if (input[0] <= 15.187127113342285) {
      if (input[0] <= 8.887478351593018) {
          if (input[0] <= 4.580510377883911) {
              var147 = [0.0, 0.0, 1.0];
          } else {
              if (input[3] <= 0.10000000149011612) {
                  if (input[0] <= 6.659921646118164) {
                      if (input[2] <= 4.402753591537476) {
                          var147 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[4] <= 84.11212539672852) {
                              var147 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[5] <= 20.488849639892578) {
                                  var147 = [0.0, 0.0, 1.0];
                              } else {
                                  var147 = [0.0, 0.9285714285714286, 0.07142857142857142];
                              }
                          }
                      }
                  } else {
                      if (input[5] <= 5.501294136047363) {
                          var147 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 42.12100601196289) {
                              if (input[1] <= 76.5) {
                                  var147 = [0.0, 1.0, 0.0];
                              } else {
                                  var147 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[2] <= 2.649999976158142) {
                                  var147 = [1.0, 0.0, 0.0];
                              } else {
                                  var147 = [0.0, 0.3333333333333333, 0.6666666666666666];
                              }
                          }
                      }
                  }
              } else {
                  var147 = [1.0, 0.0, 0.0];
              }
          }
      } else {
          if (input[4] <= 84.771484375) {
              if (input[2] <= 1.821363389492035) {
                  if (input[0] <= 13.049999713897705) {
                      var147 = [0.0, 1.0, 0.0];
                  } else {
                      var147 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[1] <= 63.5) {
                      var147 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[1] <= 76.0) {
                          var147 = [0.0, 0.0, 1.0];
                      } else {
                          var147 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[2] <= 6.1057844161987305) {
                  if (input[2] <= 0.9216743409633636) {
                      if (input[5] <= 27.55000066757202) {
                          var147 = [0.0, 0.0, 1.0];
                      } else {
                          var147 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[4] <= 91.0999984741211) {
                          if (input[5] <= 145.89652252197266) {
                              if (input[5] <= 117.25) {
                                  var147 = [0.13636363636363635, 0.0, 0.8636363636363636];
                              } else {
                                  var147 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var147 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[0] <= 9.950000286102295) {
                              var147 = [0.0, 0.0, 1.0];
                          } else {
                              var147 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  if (input[0] <= 11.812472343444824) {
                      var147 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[4] <= 87.25) {
                          var147 = [0.0, 1.0, 0.0];
                      } else {
                          var147 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      }
  } else {
      if (input[1] <= 34.5) {
          if (input[1] <= 21.5) {
              var147 = [1.0, 0.0, 0.0];
          } else {
              if (input[4] <= 91.14999771118164) {
                  if (input[5] <= 9.874841451644897) {
                      var147 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[4] <= 83.67634963989258) {
                          var147 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[0] <= 24.5) {
                              if (input[5] <= 20.15000057220459) {
                                  var147 = [1.0, 0.0, 0.0];
                              } else {
                                  var147 = [0.02127659574468085, 0.0, 0.9787234042553191];
                              }
                          } else {
                              var147 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  if (input[1] <= 24.5) {
                      if (input[4] <= 91.45931243896484) {
                          var147 = [0.0, 0.0, 1.0];
                      } else {
                          var147 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[2] <= 2.450000047683716) {
                          if (input[4] <= 91.8499984741211) {
                              if (input[1] <= 33.0) {
                                  var147 = [1.0, 0.0, 0.0];
                              } else {
                                  var147 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var147 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var147 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      } else {
          if (input[2] <= 3.959672212600708) {
              if (input[5] <= 68.57696723937988) {
                  if (input[4] <= 84.0999984741211) {
                      var147 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[4] <= 92.0) {
                          var147 = [0.0, 0.0, 1.0];
                      } else {
                          var147 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[0] <= 24.7997465133667) {
                      if (input[0] <= 21.80151081085205) {
                          if (input[2] <= 2.656408429145813) {
                              if (input[4] <= 91.95000076293945) {
                                  var147 = [0.034482758620689655, 0.0, 0.9655172413793104];
                              } else {
                                  var147 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[1] <= 40.0) {
                                  var147 = [1.0, 0.0, 0.0];
                              } else {
                                  var147 = [0.43103448275862066, 0.0, 0.5689655172413793];
                              }
                          }
                      } else {
                          if (input[5] <= 102.19999694824219) {
                              var147 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[4] <= 91.25) {
                                  var147 = [0.0, 0.0, 1.0];
                              } else {
                                  var147 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      var147 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[4] <= 83.25) {
                  var147 = [0.0, 1.0, 0.0];
              } else {
                  if (input[2] <= 4.891844987869263) {
                      if (input[1] <= 35.5) {
                          var147 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[2] <= 4.02163290977478) {
                              if (input[0] <= 18.649999618530273) {
                                  var147 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              } else {
                                  var147 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[5] <= 133.45000457763672) {
                                  var147 = [0.2222222222222222, 0.0, 0.7777777777777778];
                              } else {
                                  var147 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      if (input[2] <= 5.6000001430511475) {
                          if (input[2] <= 4.964880466461182) {
                              if (input[4] <= 89.69999694824219) {
                                  var147 = [0.0, 0.0, 1.0];
                              } else {
                                  var147 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[0] <= 19.73665142059326) {
                                  var147 = [0.3333333333333333, 0.0, 0.6666666666666666];
                              } else {
                                  var147 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          var147 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      }
  }
  var53 = addVec(var54, var147);
  let var148: HazardVector = [0, 0, 0];
  if (input[4] <= 84.84973907470703) {
      if (input[5] <= 3.381048560142517) {
          if (input[1] <= 52.5) {
              var148 = [0.0, 1.0, 0.0];
          } else {
              if (input[4] <= 62.09445381164551) {
                  var148 = [0.0, 1.0, 0.0];
              } else {
                  var148 = [0.0, 0.0, 1.0];
              }
          }
      } else {
          if (input[2] <= 6.6822545528411865) {
              if (input[0] <= 4.453939437866211) {
                  var148 = [0.0, 0.0, 1.0];
              } else {
                  if (input[4] <= 84.67908096313477) {
                      if (input[1] <= 73.5) {
                          var148 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[5] <= 4.7218780517578125) {
                              if (input[5] <= 4.4723219871521) {
                                  var148 = [0.0, 1.0, 0.0];
                              } else {
                                  var148 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var148 = [0.0, 1.0, 0.0];
                          }
                      }
                  } else {
                      if (input[5] <= 9.542841911315918) {
                          var148 = [0.0, 0.0, 1.0];
                      } else {
                          var148 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[1] <= 42.5) {
                  var148 = [0.0, 1.0, 0.0];
              } else {
                  var148 = [0.0, 0.0, 1.0];
              }
          }
      }
  } else {
      if (input[0] <= 22.78199577331543) {
          if (input[4] <= 91.95000076293945) {
              if (input[0] <= 4.902908563613892) {
                  if (input[1] <= 36.0) {
                      var148 = [0.0, 1.0, 0.0];
                  } else {
                      var148 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[3] <= 0.10000000149011612) {
                      if (input[2] <= 4.477004528045654) {
                          if (input[4] <= 91.09317016601562) {
                              if (input[5] <= 277.34999084472656) {
                                  var148 = [0.050314465408805034, 0.0, 0.949685534591195];
                              } else {
                                  var148 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[1] <= 40.0) {
                                  var148 = [0.8, 0.0, 0.2];
                              } else {
                                  var148 = [0.23880597014925373, 0.0, 0.7611940298507462];
                              }
                          }
                      } else {
                          if (input[5] <= 129.8000030517578) {
                              if (input[1] <= 36.5) {
                                  var148 = [0.72, 0.0, 0.28];
                              } else {
                                  var148 = [0.22535211267605634, 0.014084507042253521, 0.7605633802816901];
                              }
                          } else {
                              var148 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      var148 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              var148 = [1.0, 0.0, 0.0];
          }
      } else {
          if (input[4] <= 91.4093132019043) {
              if (input[4] <= 90.00779724121094) {
                  var148 = [0.0, 0.0, 1.0];
              } else {
                  if (input[2] <= 3.085856795310974) {
                      if (input[0] <= 24.299999237060547) {
                          var148 = [0.0, 0.0, 1.0];
                      } else {
                          var148 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var148 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[0] <= 23.149999618530273) {
                  if (input[2] <= 2.649999976158142) {
                      var148 = [0.0, 0.0, 1.0];
                  } else {
                      var148 = [1.0, 0.0, 0.0];
                  }
              } else {
                  var148 = [1.0, 0.0, 0.0];
              }
          }
      }
  }
  var52 = addVec(var53, var148);
  let var149: HazardVector = [0, 0, 0];
  if (input[5] <= 72.0999984741211) {
      if (input[0] <= 7.454452276229858) {
          if (input[0] <= 4.580510377883911) {
              var149 = [0.0, 0.0, 1.0];
          } else {
              if (input[4] <= 83.96465301513672) {
                  var149 = [0.0, 1.0, 0.0];
              } else {
                  if (input[0] <= 6.553701639175415) {
                      if (input[4] <= 84.00327682495117) {
                          var149 = [0.0, 0.0, 1.0];
                      } else {
                          var149 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      if (input[5] <= 6.631809234619141) {
                          var149 = [0.0, 1.0, 0.0];
                      } else {
                          var149 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      } else {
          if (input[2] <= 2.372361183166504) {
              if (input[0] <= 8.93718957901001) {
                  var149 = [0.0, 1.0, 0.0];
              } else {
                  if (input[0] <= 12.99950361251831) {
                      if (input[1] <= 48.5) {
                          if (input[2] <= 2.2777202129364014) {
                              var149 = [0.0, 1.0, 0.0];
                          } else {
                              var149 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var149 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[4] <= 90.75571060180664) {
                          if (input[4] <= 78.90918350219727) {
                              var149 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[4] <= 85.54472351074219) {
                                  var149 = [0.0, 0.2, 0.8];
                              } else {
                                  var149 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          var149 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[0] <= 15.187127113342285) {
                  if (input[5] <= 25.379926681518555) {
                      if (input[4] <= 84.58483505249023) {
                          var149 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[5] <= 7.3999998569488525) {
                              var149 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[4] <= 85.92582321166992) {
                                  var149 = [0.0, 0.8888888888888888, 0.1111111111111111];
                              } else {
                                  var149 = [0.45454545454545453, 0.0, 0.5454545454545454];
                              }
                          }
                      }
                  } else {
                      if (input[5] <= 54.31645965576172) {
                          if (input[1] <= 48.0) {
                              if (input[1] <= 39.5) {
                                  var149 = [0.5714285714285714, 0.42857142857142855, 0.0];
                              } else {
                                  var149 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[4] <= 84.5706901550293) {
                                  var149 = [0.0, 1.0, 0.0];
                              } else {
                                  var149 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              }
                          }
                      } else {
                          var149 = [0.0, 1.0, 0.0];
                      }
                  }
              } else {
                  if (input[5] <= 52.562095642089844) {
                      if (input[4] <= 83.92634963989258) {
                          var149 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[2] <= 4.477004528045654) {
                              if (input[0] <= 16.0) {
                                  var149 = [0.0, 0.0, 1.0];
                              } else {
                                  var149 = [0.14285714285714285, 0.0, 0.8571428571428571];
                              }
                          } else {
                              if (input[4] <= 89.87937545776367) {
                                  var149 = [0.0, 0.0, 1.0];
                              } else {
                                  var149 = [0.9473684210526315, 0.0, 0.05263157894736842];
                              }
                          }
                      }
                  } else {
                      if (input[5] <= 61.44999885559082) {
                          var149 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[5] <= 63.0269660949707) {
                              var149 = [1.0, 0.0, 0.0];
                          } else {
                              var149 = [0.0, 1.0, 0.0];
                          }
                      }
                  }
              }
          }
      }
  } else {
      if (input[4] <= 91.95000076293945) {
          if (input[5] <= 129.8000030517578) {
              if (input[2] <= 5.283337354660034) {
                  if (input[4] <= 91.09317016601562) {
                      if (input[1] <= 52.0) {
                          var149 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[1] <= 56.0) {
                              var149 = [1.0, 0.0, 0.0];
                          } else {
                              var149 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[0] <= 20.550000190734863) {
                          if (input[4] <= 91.20571517944336) {
                              var149 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[1] <= 38.0) {
                                  var149 = [1.0, 0.0, 0.0];
                              } else {
                                  var149 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[2] <= 1.5499999523162842) {
                              if (input[2] <= 1.0999999642372131) {
                                  var149 = [1.0, 0.0, 0.0];
                              } else {
                                  var149 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[5] <= 104.31684494018555) {
                                  var149 = [1.0, 0.0, 0.0];
                              } else {
                                  var149 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              }
                          }
                      }
                  }
              } else {
                  if (input[4] <= 91.14999771118164) {
                      if (input[2] <= 6.050000190734863) {
                          if (input[4] <= 89.39999771118164) {
                              var149 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[2] <= 5.6000001430511475) {
                                  var149 = [1.0, 0.0, 0.0];
                              } else {
                                  var149 = [0.5, 0.0, 0.5];
                              }
                          }
                      } else {
                          var149 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var149 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[2] <= 3.799999952316284) {
                  if (input[4] <= 91.2299919128418) {
                      if (input[1] <= 74.5) {
                          if (input[5] <= 255.9412841796875) {
                              if (input[0] <= 15.911245822906494) {
                                  var149 = [0.42857142857142855, 0.0, 0.5714285714285714];
                              } else {
                                  var149 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[1] <= 57.0) {
                                  var149 = [0.0, 0.0, 1.0];
                              } else {
                                  var149 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          var149 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[5] <= 214.8499984741211) {
                          if (input[2] <= 2.649999976158142) {
                              var149 = [1.0, 0.0, 0.0];
                          } else {
                              var149 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var149 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  var149 = [1.0, 0.0, 0.0];
              }
          }
      } else {
          var149 = [1.0, 0.0, 0.0];
      }
  }
  var51 = addVec(var52, var149);
  let var150: HazardVector = [0, 0, 0];
  if (input[4] <= 84.73189544677734) {
      if (input[0] <= 23.7997465133667) {
          if (input[1] <= 70.5) {
              if (input[4] <= 84.58238983154297) {
                  if (input[2] <= 7.796332597732544) {
                      var150 = [0.0, 1.0, 0.0];
                  } else {
                      var150 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[2] <= 8.638829231262207) {
                      var150 = [0.0, 1.0, 0.0];
                  } else {
                      var150 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[1] <= 75.5) {
                  if (input[2] <= 2.091624677181244) {
                      var150 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[2] <= 6.056401491165161) {
                          var150 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[5] <= 30.102218627929688) {
                              var150 = [0.0, 0.0, 1.0];
                          } else {
                              var150 = [0.0, 1.0, 0.0];
                          }
                      }
                  }
              } else {
                  if (input[4] <= 83.33988571166992) {
                      var150 = [0.0, 1.0, 0.0];
                  } else {
                      var150 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[5] <= 66.2592601776123) {
              var150 = [0.0, 1.0, 0.0];
          } else {
              var150 = [0.0, 0.0, 1.0];
          }
      }
  } else {
      if (input[0] <= 23.84999942779541) {
          if (input[1] <= 21.5) {
              if (input[2] <= 6.5) {
                  var150 = [1.0, 0.0, 0.0];
              } else {
                  var150 = [0.0, 1.0, 0.0];
              }
          } else {
              if (input[1] <= 35.5) {
                  if (input[1] <= 33.5) {
                      if (input[1] <= 29.5) {
                          if (input[4] <= 91.3093147277832) {
                              if (input[4] <= 90.90689849853516) {
                                  var150 = [0.0, 0.0, 1.0];
                              } else {
                                  var150 = [0.42857142857142855, 0.0, 0.5714285714285714];
                              }
                          } else {
                              var150 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[4] <= 90.85570907592773) {
                              var150 = [0.0, 0.0, 1.0];
                          } else {
                              var150 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[2] <= 4.049999952316284) {
                          if (input[2] <= 2.0) {
                              var150 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[4] <= 90.8499984741211) {
                                  var150 = [0.0, 0.0, 1.0];
                              } else {
                                  var150 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          var150 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[4] <= 91.77841186523438) {
                      if (input[2] <= 3.959672212600708) {
                          if (input[4] <= 91.09317016601562) {
                              if (input[2] <= 2.6667516231536865) {
                                  var150 = [0.0, 0.0, 1.0];
                              } else {
                                  var150 = [0.06451612903225806, 0.0, 0.9354838709677419];
                              }
                          } else {
                              if (input[4] <= 91.15571594238281) {
                                  var150 = [1.0, 0.0, 0.0];
                              } else {
                                  var150 = [0.14893617021276595, 0.0, 0.851063829787234];
                              }
                          }
                      } else {
                          if (input[4] <= 88.0999984741211) {
                              if (input[0] <= 12.697193145751953) {
                                  var150 = [0.047619047619047616, 0.0, 0.9523809523809523];
                              } else {
                                  var150 = [0.0, 0.42857142857142855, 0.5714285714285714];
                              }
                          } else {
                              if (input[1] <= 71.0) {
                                  var150 = [0.5138888888888888, 0.0, 0.4861111111111111];
                              } else {
                                  var150 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      if (input[4] <= 91.95000076293945) {
                          if (input[1] <= 54.5) {
                              if (input[4] <= 91.82258605957031) {
                                  var150 = [1.0, 0.0, 0.0];
                              } else {
                                  var150 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var150 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var150 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      } else {
          if (input[0] <= 29.09999942779541) {
              var150 = [1.0, 0.0, 0.0];
          } else {
              if (input[5] <= 240.4000015258789) {
                  var150 = [1.0, 0.0, 0.0];
              } else {
                  var150 = [0.0, 0.0, 1.0];
              }
          }
      }
  }
  var50 = addVec(var51, var150);
  let var151: HazardVector = [0, 0, 0];
  if (input[4] <= 84.66106796264648) {
      if (input[2] <= 6.705887317657471) {
          if (input[0] <= 23.75) {
              if (input[5] <= 3.381048560142517) {
                  if (input[2] <= 2.3134257197380066) {
                      if (input[2] <= 1.3723788261413574) {
                          var151 = [0.0, 1.0, 0.0];
                      } else {
                          var151 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var151 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[5] <= 6.847387075424194) {
                      if (input[4] <= 84.14999771118164) {
                          var151 = [0.0, 1.0, 0.0];
                      } else {
                          var151 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var151 = [0.0, 1.0, 0.0];
                  }
              }
          } else {
              if (input[4] <= 83.0) {
                  var151 = [0.0, 1.0, 0.0];
              } else {
                  var151 = [0.0, 0.0, 1.0];
              }
          }
      } else {
          if (input[1] <= 45.0) {
              var151 = [0.0, 1.0, 0.0];
          } else {
              var151 = [0.0, 0.0, 1.0];
          }
      }
  } else {
      if (input[1] <= 36.5) {
          if (input[5] <= 45.10000038146973) {
              if (input[0] <= 7.12144136428833) {
                  var151 = [0.0, 1.0, 0.0];
              } else {
                  if (input[5] <= 37.75) {
                      if (input[4] <= 90.79999923706055) {
                          var151 = [0.0, 0.0, 1.0];
                      } else {
                          var151 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var151 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[1] <= 32.5) {
                  if (input[2] <= 3.799999952316284) {
                      if (input[0] <= 29.0) {
                          if (input[5] <= 105.11684799194336) {
                              if (input[5] <= 104.31684494018555) {
                                  var151 = [0.8, 0.0, 0.2];
                              } else {
                                  var151 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var151 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[4] <= 91.1500015258789) {
                              var151 = [0.0, 0.0, 1.0];
                          } else {
                              var151 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      var151 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[0] <= 20.449999809265137) {
                      var151 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[1] <= 33.5) {
                          if (input[4] <= 91.29999923706055) {
                              var151 = [0.0, 0.0, 1.0];
                          } else {
                              var151 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[2] <= 2.6553947925567627) {
                              if (input[5] <= 120.85000228881836) {
                                  var151 = [0.0, 0.0, 1.0];
                              } else {
                                  var151 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[2] <= 4.049999952316284) {
                                  var151 = [0.8333333333333334, 0.0, 0.16666666666666666];
                              } else {
                                  var151 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              }
          }
      } else {
          if (input[5] <= 137.4680938720703) {
              if (input[4] <= 92.0) {
                  if (input[5] <= 104.34992218017578) {
                      if (input[4] <= 89.98175811767578) {
                          if (input[5] <= 90.9000015258789) {
                              if (input[2] <= 4.954414367675781) {
                                  var151 = [0.0, 0.013333333333333334, 0.9866666666666667];
                              } else {
                                  var151 = [0.2222222222222222, 0.2222222222222222, 0.5555555555555556];
                              }
                          } else {
                              var151 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[0] <= 15.099999904632568) {
                              if (input[5] <= 99.54394149780273) {
                                  var151 = [0.9375, 0.0, 0.0625];
                              } else {
                                  var151 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[2] <= 4.477004528045654) {
                                  var151 = [0.30303030303030304, 0.0, 0.696969696969697];
                              } else {
                                  var151 = [0.8888888888888888, 0.0, 0.1111111111111111];
                              }
                          }
                      }
                  } else {
                      if (input[4] <= 91.38941955566406) {
                          var151 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[4] <= 91.54999923706055) {
                              var151 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[1] <= 43.0) {
                                  var151 = [0.5, 0.0, 0.5];
                              } else {
                                  var151 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              } else {
                  var151 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[5] <= 243.29999542236328) {
                  if (input[0] <= 16.25) {
                      if (input[0] <= 13.0) {
                          var151 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[5] <= 148.8000030517578) {
                              if (input[5] <= 145.89652252197266) {
                                  var151 = [0.0, 0.0, 1.0];
                              } else {
                                  var151 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var151 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      var151 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[5] <= 272.0838928222656) {
                      if (input[2] <= 2.6033161878585815) {
                          var151 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[0] <= 15.522592067718506) {
                              var151 = [1.0, 0.0, 0.0];
                          } else {
                              var151 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      var151 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  }
  var49 = addVec(var50, var151);
  let var152: HazardVector = [0, 0, 0];
  if (input[0] <= 15.027164936065674) {
      if (input[5] <= 27.01805877685547) {
          if (input[5] <= 10.31514024734497) {
              if (input[5] <= 3.493544101715088) {
                  if (input[2] <= 6.8729634284973145) {
                      if (input[0] <= 12.599999904632568) {
                          var152 = [0.0, 1.0, 0.0];
                      } else {
                          var152 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var152 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[4] <= 84.71780395507812) {
                      if (input[5] <= 3.877484917640686) {
                          if (input[2] <= 6.859121322631836) {
                              var152 = [0.0, 1.0, 0.0];
                          } else {
                              var152 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[0] <= 6.738475799560547) {
                              if (input[4] <= 84.12134552001953) {
                                  var152 = [0.0, 1.0, 0.0];
                              } else {
                                  var152 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var152 = [0.0, 1.0, 0.0];
                          }
                      }
                  } else {
                      if (input[0] <= 13.095951557159424) {
                          var152 = [0.0, 0.0, 1.0];
                      } else {
                          var152 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[2] <= 3.157384991645813) {
                  if (input[4] <= 84.64281845092773) {
                      var152 = [0.0, 1.0, 0.0];
                  } else {
                      var152 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[1] <= 65.0) {
                      if (input[4] <= 86.54999923706055) {
                          var152 = [0.0, 1.0, 0.0];
                      } else {
                          var152 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var152 = [0.0, 0.0, 1.0];
                  }
              }
          }
      } else {
          if (input[1] <= 65.5) {
              if (input[2] <= 6.114702224731445) {
                  if (input[5] <= 51.459716796875) {
                      if (input[5] <= 51.12447929382324) {
                          if (input[2] <= 4.108651876449585) {
                              if (input[2] <= 2.5301949977874756) {
                                  var152 = [0.0, 0.0, 1.0];
                              } else {
                                  var152 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var152 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var152 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[2] <= 1.8354220986366272) {
                          var152 = [1.0, 0.0, 0.0];
                      } else {
                          var152 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  if (input[2] <= 6.801153659820557) {
                      var152 = [0.0, 1.0, 0.0];
                  } else {
                      var152 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[5] <= 75.34341049194336) {
                  if (input[3] <= 0.10000000149011612) {
                      if (input[4] <= 74.22601890563965) {
                          var152 = [0.0, 1.0, 0.0];
                      } else {
                          var152 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var152 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[1] <= 71.5) {
                      if (input[2] <= 4.656139612197876) {
                          if (input[1] <= 68.0) {
                              if (input[0] <= 14.338986873626709) {
                                  var152 = [0.0, 0.0, 1.0];
                              } else {
                                  var152 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var152 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var152 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[0] <= 13.0) {
                          if (input[0] <= 9.950000286102295) {
                              if (input[4] <= 91.54999923706055) {
                                  var152 = [1.0, 0.0, 0.0];
                              } else {
                                  var152 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var152 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[4] <= 89.16718673706055) {
                              var152 = [0.0, 0.0, 1.0];
                          } else {
                              var152 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          }
      }
  } else {
      if (input[2] <= 3.977606415748596) {
          if (input[4] <= 92.0) {
              if (input[5] <= 71.0) {
                  if (input[5] <= 52.58213806152344) {
                      if (input[4] <= 80.9804916381836) {
                          var152 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[0] <= 18.184471130371094) {
                              var152 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[5] <= 32.64133834838867) {
                                  var152 = [1.0, 0.0, 0.0];
                              } else {
                                  var152 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  } else {
                      if (input[5] <= 66.17696571350098) {
                          var152 = [0.0, 1.0, 0.0];
                      } else {
                          var152 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[0] <= 23.667651176452637) {
                      if (input[2] <= 1.0999999642372131) {
                          var152 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[2] <= 2.656408429145813) {
                              if (input[4] <= 91.40608978271484) {
                                  var152 = [0.0, 0.0, 1.0];
                              } else {
                                  var152 = [0.13043478260869565, 0.0, 0.8695652173913043];
                              }
                          } else {
                              if (input[4] <= 91.04999923706055) {
                                  var152 = [0.0, 0.0, 1.0];
                              } else {
                                  var152 = [0.27586206896551724, 0.0, 0.7241379310344828];
                              }
                          }
                      }
                  } else {
                      if (input[1] <= 30.0) {
                          var152 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[2] <= 3.3499999046325684) {
                              if (input[5] <= 94.44999694824219) {
                                  var152 = [0.0, 0.0, 1.0];
                              } else {
                                  var152 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var152 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          } else {
              var152 = [1.0, 0.0, 0.0];
          }
      } else {
          if (input[4] <= 89.67834854125977) {
              if (input[4] <= 83.43782043457031) {
                  var152 = [0.0, 1.0, 0.0];
              } else {
                  if (input[2] <= 5.150000095367432) {
                      var152 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[2] <= 5.522733449935913) {
                          var152 = [1.0, 0.0, 0.0];
                      } else {
                          var152 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          } else {
              if (input[5] <= 111.04999923706055) {
                  if (input[2] <= 4.477004528045654) {
                      if (input[5] <= 109.21250915527344) {
                          if (input[0] <= 15.876285076141357) {
                              if (input[4] <= 90.57773971557617) {
                                  var152 = [0.0, 0.0, 1.0];
                              } else {
                                  var152 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[1] <= 32.5) {
                                  var152 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              } else {
                                  var152 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          var152 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[5] <= 108.35000228881836) {
                          var152 = [1.0, 0.0, 0.0];
                      } else {
                          var152 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  var152 = [1.0, 0.0, 0.0];
              }
          }
      }
  }
  var48 = addVec(var49, var152);
  let var153: HazardVector = [0, 0, 0];
  if (input[5] <= 72.0999984741211) {
      if (input[5] <= 12.193005561828613) {
          if (input[4] <= 84.58238983154297) {
              if (input[5] <= 3.381048560142517) {
                  if (input[2] <= 3.419666826725006) {
                      if (input[5] <= 2.050000011920929) {
                          var153 = [0.0, 1.0, 0.0];
                      } else {
                          var153 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var153 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[1] <= 73.5) {
                      var153 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[4] <= 82.4384651184082) {
                          var153 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[0] <= 9.348968982696533) {
                              if (input[1] <= 77.0) {
                                  var153 = [0.0, 1.0, 0.0];
                              } else {
                                  var153 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var153 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              }
          } else {
              if (input[0] <= 12.137383937835693) {
                  var153 = [0.0, 0.0, 1.0];
              } else {
                  var153 = [0.0, 1.0, 0.0];
              }
          }
      } else {
          if (input[0] <= 12.268166065216064) {
              if (input[4] <= 85.67388153076172) {
                  if (input[5] <= 30.021005630493164) {
                      if (input[0] <= 4.580510377883911) {
                          var153 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 27.10390567779541) {
                              if (input[1] <= 66.5) {
                                  var153 = [0.0, 0.9622641509433962, 0.03773584905660377];
                              } else {
                                  var153 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var153 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      var153 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[3] <= 0.10000000149011612) {
                      if (input[2] <= 5.029540538787842) {
                          var153 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 51.75) {
                              var153 = [1.0, 0.0, 0.0];
                          } else {
                              var153 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      var153 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[1] <= 34.0) {
                  if (input[4] <= 90.79999923706055) {
                      if (input[4] <= 83.67906188964844) {
                          var153 = [0.0, 1.0, 0.0];
                      } else {
                          var153 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var153 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[5] <= 53.43804168701172) {
                      if (input[1] <= 52.5) {
                          if (input[5] <= 22.18600559234619) {
                              if (input[2] <= 3.157384991645813) {
                                  var153 = [0.0, 0.23529411764705882, 0.7647058823529411];
                              } else {
                                  var153 = [0.0, 1.0, 0.0];
                              }
                          } else {
                              if (input[2] <= 2.9460012912750244) {
                                  var153 = [0.28571428571428575, 0.4285714285714286, 0.28571428571428575];
                              } else {
                                  var153 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[0] <= 14.400000095367432) {
                              if (input[2] <= 2.899999976158142) {
                                  var153 = [0.0, 0.0, 1.0];
                              } else {
                                  var153 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[1] <= 69.0) {
                                  var153 = [1.0, 0.0, 0.0];
                              } else {
                                  var153 = [0.0, 1.0, 0.0];
                              }
                          }
                      }
                  } else {
                      if (input[1] <= 52.0) {
                          if (input[1] <= 49.5) {
                              if (input[4] <= 87.89999771118164) {
                                  var153 = [0.0, 1.0, 0.0];
                              } else {
                                  var153 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var153 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var153 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          }
      }
  } else {
      if (input[5] <= 131.0419692993164) {
          if (input[4] <= 92.0) {
              if (input[4] <= 91.09317016601562) {
                  if (input[2] <= 6.5) {
                      if (input[4] <= 90.27288055419922) {
                          if (input[1] <= 52.0) {
                              var153 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[5] <= 90.9000015258789) {
                                  var153 = [0.0, 0.0, 1.0];
                              } else {
                                  var153 = [0.5555555555555556, 0.0, 0.4444444444444444];
                              }
                          }
                      } else {
                          var153 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var153 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[0] <= 23.800000190734863) {
                      if (input[2] <= 4.358978986740112) {
                          if (input[5] <= 95.67044067382812) {
                              var153 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[1] <= 43.5) {
                                  var153 = [0.2, 0.0, 0.8];
                              } else {
                                  var153 = [0.037037037037037035, 0.0, 0.9629629629629629];
                              }
                          }
                      } else {
                          if (input[2] <= 5.150000095367432) {
                              if (input[4] <= 91.44999694824219) {
                                  var153 = [1.0, 0.0, 0.0];
                              } else {
                                  var153 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var153 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      var153 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              var153 = [1.0, 0.0, 0.0];
          }
      } else {
          if (input[2] <= 3.799999952316284) {
              if (input[5] <= 239.75) {
                  if (input[4] <= 90.91413116455078) {
                      var153 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[4] <= 91.70000076293945) {
                          if (input[1] <= 40.0) {
                              var153 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[2] <= 3.3499999046325684) {
                                  var153 = [0.0, 0.0, 1.0];
                              } else {
                                  var153 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          var153 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[5] <= 279.0049591064453) {
                      if (input[1] <= 66.0) {
                          var153 = [0.0, 0.0, 1.0];
                      } else {
                          var153 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var153 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[0] <= 13.760508060455322) {
                  if (input[1] <= 71.5) {
                      var153 = [0.0, 0.0, 1.0];
                  } else {
                      var153 = [1.0, 0.0, 0.0];
                  }
              } else {
                  var153 = [1.0, 0.0, 0.0];
              }
          }
      }
  }
  var47 = addVec(var48, var153);
  let var154: HazardVector = [0, 0, 0];
  if (input[2] <= 3.9589154720306396) {
      if (input[5] <= 8.819005966186523) {
          if (input[4] <= 84.14999771118164) {
              if (input[5] <= 4.544931173324585) {
                  if (input[5] <= 4.535261869430542) {
                      var154 = [0.0, 1.0, 0.0];
                  } else {
                      var154 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var154 = [0.0, 1.0, 0.0];
              }
          } else {
              if (input[5] <= 6.700000047683716) {
                  var154 = [0.0, 0.0, 1.0];
              } else {
                  if (input[1] <= 62.5) {
                      var154 = [0.0, 1.0, 0.0];
                  } else {
                      var154 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[4] <= 91.78664779663086) {
              if (input[4] <= 84.39938735961914) {
                  var154 = [0.0, 1.0, 0.0];
              } else {
                  if (input[4] <= 90.99648666381836) {
                      if (input[0] <= 24.399746894836426) {
                          if (input[5] <= 279.8999938964844) {
                              if (input[5] <= 253.36990356445312) {
                                  var154 = [0.016666666666666666, 0.0, 0.9833333333333333];
                              } else {
                                  var154 = [0.16666666666666666, 0.0, 0.8333333333333334];
                              }
                          } else {
                              var154 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[1] <= 28.0) {
                              var154 = [0.0, 0.0, 1.0];
                          } else {
                              var154 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[4] <= 91.62975692749023) {
                          if (input[0] <= 23.800000190734863) {
                              if (input[4] <= 91.09317016601562) {
                                  var154 = [0.0, 0.0, 1.0];
                              } else {
                                  var154 = [0.3584905660377358, 0.0, 0.6415094339622641];
                              }
                          } else {
                              var154 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var154 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          } else {
              if (input[5] <= 113.52449798583984) {
                  if (input[5] <= 109.9744987487793) {
                      var154 = [1.0, 0.0, 0.0];
                  } else {
                      var154 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var154 = [1.0, 0.0, 0.0];
              }
          }
      }
  } else {
      if (input[5] <= 66.22894859313965) {
          if (input[2] <= 8.783466339111328) {
              if (input[1] <= 47.5) {
                  if (input[1] <= 42.5) {
                      if (input[5] <= 25.550000190734863) {
                          if (input[0] <= 9.049054145812988) {
                              if (input[4] <= 85.61261749267578) {
                                  var154 = [0.0, 1.0, 0.0];
                              } else {
                                  var154 = [0.25, 0.0, 0.75];
                              }
                          } else {
                              var154 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          if (input[4] <= 90.89999771118164) {
                              if (input[0] <= 15.469113826751709) {
                                  var154 = [0.5000000000000001, 0.33333333333333337, 0.16666666666666669];
                              } else {
                                  var154 = [0.0, 0.10526315789473684, 0.8947368421052632];
                              }
                          } else {
                              var154 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[4] <= 84.87357711791992) {
                          var154 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[2] <= 4.5235302448272705) {
                              if (input[0] <= 15.686914920806885) {
                                  var154 = [0.0, 0.0, 1.0];
                              } else {
                                  var154 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var154 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  if (input[2] <= 6.705887317657471) {
                      if (input[5] <= 16.53004264831543) {
                          if (input[5] <= 9.300000190734863) {
                              var154 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[2] <= 6.1884636878967285) {
                                  var154 = [0.0, 1.0, 0.0];
                              } else {
                                  var154 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[4] <= 84.62413787841797) {
                              var154 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[4] <= 87.95000076293945) {
                                  var154 = [0.0, 0.25, 0.75];
                              } else {
                                  var154 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      var154 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[1] <= 42.5) {
                  var154 = [1.0, 0.0, 0.0];
              } else {
                  var154 = [0.0, 0.0, 1.0];
              }
          }
      } else {
          if (input[4] <= 91.04999923706055) {
              if (input[4] <= 89.0) {
                  var154 = [1.0, 0.0, 0.0];
              } else {
                  if (input[1] <= 71.0) {
                      if (input[2] <= 6.5) {
                          if (input[5] <= 100.4000015258789) {
                              if (input[0] <= 18.699999809265137) {
                                  var154 = [0.0, 0.0, 1.0];
                              } else {
                                  var154 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var154 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var154 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var154 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[4] <= 91.77841186523438) {
                  if (input[5] <= 119.35000228881836) {
                      if (input[0] <= 19.018186569213867) {
                          if (input[0] <= 17.399999618530273) {
                              var154 = [1.0, 0.0, 0.0];
                          } else {
                              var154 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var154 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var154 = [1.0, 0.0, 0.0];
                  }
              } else {
                  var154 = [1.0, 0.0, 0.0];
              }
          }
      }
  }
  var46 = addVec(var47, var154);
  let var155: HazardVector = [0, 0, 0];
  if (input[5] <= 71.59341049194336) {
      if (input[5] <= 9.70737600326538) {
          if (input[1] <= 46.5) {
              if (input[2] <= 5.844182252883911) {
                  if (input[5] <= 5.554974794387817) {
                      if (input[4] <= 83.92876815795898) {
                          var155 = [0.0, 1.0, 0.0];
                      } else {
                          var155 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var155 = [0.0, 1.0, 0.0];
                  }
              } else {
                  var155 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[4] <= 84.36609649658203) {
                  if (input[1] <= 73.5) {
                      var155 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[5] <= 4.4723219871521) {
                          var155 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[5] <= 4.7218780517578125) {
                              var155 = [0.0, 0.0, 1.0];
                          } else {
                              var155 = [0.0, 1.0, 0.0];
                          }
                      }
                  }
              } else {
                  var155 = [0.0, 0.0, 1.0];
              }
          }
      } else {
          if (input[4] <= 85.68462371826172) {
              if (input[0] <= 4.580510377883911) {
                  var155 = [0.0, 0.0, 1.0];
              } else {
                  if (input[0] <= 19.27428150177002) {
                      if (input[2] <= 4.901097297668457) {
                          if (input[4] <= 84.66269302368164) {
                              var155 = [0.0, 1.0, 0.0];
                          } else {
                              var155 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[1] <= 55.5) {
                              var155 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[2] <= 6.590231418609619) {
                                  var155 = [0.0, 0.9090909090909091, 0.09090909090909091];
                              } else {
                                  var155 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  } else {
                      var155 = [0.0, 1.0, 0.0];
                  }
              }
          } else {
              if (input[2] <= 3.977606415748596) {
                  if (input[2] <= 2.9904597997665405) {
                      var155 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[0] <= 20.699999809265137) {
                          if (input[1] <= 50.0) {
                              if (input[4] <= 91.11366653442383) {
                                  var155 = [0.0, 0.0, 1.0];
                              } else {
                                  var155 = [0.5, 0.0, 0.5];
                              }
                          } else {
                              var155 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var155 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[4] <= 90.3499984741211) {
                      if (input[5] <= 20.89213752746582) {
                          var155 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[4] <= 89.25) {
                              var155 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[4] <= 89.32354354858398) {
                                  var155 = [1.0, 0.0, 0.0];
                              } else {
                                  var155 = [0.14285714285714285, 0.0, 0.8571428571428571];
                              }
                          }
                      }
                  } else {
                      var155 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  } else {
      if (input[0] <= 23.45557689666748) {
          if (input[4] <= 91.95000076293945) {
              if (input[5] <= 129.8000030517578) {
                  if (input[5] <= 98.25) {
                      if (input[2] <= 4.282249927520752) {
                          if (input[5] <= 91.2944107055664) {
                              var155 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[5] <= 95.5778923034668) {
                                  var155 = [1.0, 0.0, 0.0];
                              } else {
                                  var155 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[5] <= 88.40763092041016) {
                              var155 = [0.0, 0.0, 1.0];
                          } else {
                              var155 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[1] <= 65.0) {
                          if (input[1] <= 41.5) {
                              var155 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[1] <= 42.5) {
                                  var155 = [0.42857142857142855, 0.0, 0.5714285714285714];
                              } else {
                                  var155 = [0.04918032786885246, 0.0, 0.9508196721311475];
                              }
                          }
                      } else {
                          if (input[0] <= 14.338986873626709) {
                              var155 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[5] <= 117.12013626098633) {
                                  var155 = [1.0, 0.0, 0.0];
                              } else {
                                  var155 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[2] <= 3.799999952316284) {
                      if (input[1] <= 38.0) {
                          var155 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[1] <= 58.0) {
                              var155 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[1] <= 74.5) {
                                  var155 = [1.0, 0.0, 0.0];
                              } else {
                                  var155 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  } else {
                      if (input[4] <= 90.26674270629883) {
                          if (input[2] <= 5.366742849349976) {
                              var155 = [0.0, 0.0, 1.0];
                          } else {
                              var155 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var155 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              var155 = [1.0, 0.0, 0.0];
          }
      } else {
          if (input[1] <= 35.5) {
              if (input[2] <= 3.3499999046325684) {
                  var155 = [1.0, 0.0, 0.0];
              } else {
                  if (input[2] <= 3.799999952316284) {
                      if (input[1] <= 29.5) {
                          if (input[4] <= 91.60000228881836) {
                              var155 = [0.0, 0.0, 1.0];
                          } else {
                              var155 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var155 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var155 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[5] <= 104.54999923706055) {
                  var155 = [0.0, 0.0, 1.0];
              } else {
                  var155 = [1.0, 0.0, 0.0];
              }
          }
      }
  }
  var45 = addVec(var46, var155);
  let var156: HazardVector = [0, 0, 0];
  if (input[4] <= 85.7727165222168) {
      if (input[0] <= 4.580510377883911) {
          var156 = [0.0, 0.0, 1.0];
      } else {
          if (input[4] <= 84.39938735961914) {
              if (input[1] <= 78.5) {
                  if (input[1] <= 60.5) {
                      var156 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[5] <= 3.386118173599243) {
                          var156 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[2] <= 7.336445569992065) {
                              var156 = [0.0, 1.0, 0.0];
                          } else {
                              var156 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  if (input[0] <= 5.949999809265137) {
                      var156 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[0] <= 7.772817134857178) {
                          var156 = [1.0, 0.0, 0.0];
                      } else {
                          var156 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[0] <= 5.185204267501831) {
                  if (input[2] <= 6.720386743545532) {
                      var156 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[4] <= 84.9000015258789) {
                          var156 = [0.0, 0.0, 1.0];
                      } else {
                          var156 = [0.0, 1.0, 0.0];
                      }
                  }
              } else {
                  if (input[5] <= 23.93399143218994) {
                      if (input[5] <= 6.673759460449219) {
                          var156 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[2] <= 4.91792368888855) {
                              var156 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[2] <= 5.481947660446167) {
                                  var156 = [0.0, 0.0, 1.0];
                              } else {
                                  var156 = [0.0, 0.875, 0.125];
                              }
                          }
                      }
                  } else {
                      if (input[0] <= 6.528637886047363) {
                          if (input[1] <= 56.5) {
                              var156 = [0.0, 0.0, 1.0];
                          } else {
                              var156 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          var156 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          }
      }
  } else {
      if (input[2] <= 3.977606415748596) {
          if (input[4] <= 92.0) {
              if (input[4] <= 90.99648666381836) {
                  if (input[0] <= 14.799999713897705) {
                      if (input[5] <= 201.95000457763672) {
                          if (input[2] <= 0.9216743409633636) {
                              var156 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[4] <= 89.51718521118164) {
                                  var156 = [0.0, 0.0, 1.0];
                              } else {
                                  var156 = [0.15384615384615385, 0.0, 0.8461538461538461];
                              }
                          }
                      } else {
                          var156 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[2] <= 3.5543198585510254) {
                          var156 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 279.8999938964844) {
                              var156 = [0.0, 0.0, 1.0];
                          } else {
                              var156 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  if (input[0] <= 23.84999942779541) {
                      if (input[5] <= 95.63993072509766) {
                          if (input[5] <= 58.20827674865723) {
                              if (input[2] <= 2.9124159812927246) {
                                  var156 = [0.0, 0.0, 1.0];
                              } else {
                                  var156 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var156 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[0] <= 16.5) {
                              if (input[4] <= 91.54999923706055) {
                                  var156 = [1.0, 0.0, 0.0];
                              } else {
                                  var156 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[5] <= 104.31684494018555) {
                                  var156 = [0.16666666666666666, 0.0, 0.8333333333333334];
                              } else {
                                  var156 = [0.021739130434782608, 0.0, 0.9782608695652174];
                              }
                          }
                      }
                  } else {
                      var156 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              var156 = [1.0, 0.0, 0.0];
          }
      } else {
          if (input[0] <= 22.65000057220459) {
              if (input[5] <= 129.8000030517578) {
                  if (input[5] <= 123.3846435546875) {
                      if (input[4] <= 90.14999771118164) {
                          if (input[1] <= 58.5) {
                              if (input[4] <= 86.48287582397461) {
                                  var156 = [0.0, 1.0, 0.0];
                              } else {
                                  var156 = [0.14, 0.0, 0.86];
                              }
                          } else {
                              var156 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[2] <= 4.700000047683716) {
                              if (input[5] <= 105.71250915527344) {
                                  var156 = [0.8125, 0.0, 0.1875];
                              } else {
                                  var156 = [0.3, 0.0, 0.7];
                              }
                          } else {
                              if (input[0] <= 17.899999618530273) {
                                  var156 = [1.0, 0.0, 0.0];
                              } else {
                                  var156 = [0.8095238095238095, 0.0, 0.19047619047619047];
                              }
                          }
                      }
                  } else {
                      var156 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[5] <= 139.67286682128906) {
                      if (input[5] <= 136.32286834716797) {
                          var156 = [1.0, 0.0, 0.0];
                      } else {
                          var156 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var156 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              var156 = [1.0, 0.0, 0.0];
          }
      }
  }
  var44 = addVec(var45, var156);
  let var157: HazardVector = [0, 0, 0];
  if (input[0] <= 14.450597763061523) {
      if (input[5] <= 25.84683609008789) {
          if (input[1] <= 59.5) {
              if (input[2] <= 8.783466339111328) {
                  if (input[1] <= 50.5) {
                      if (input[0] <= 10.283916473388672) {
                          if (input[4] <= 85.61261749267578) {
                              if (input[1] <= 38.0) {
                                  var157 = [0.0, 1.0, 0.0];
                              } else {
                                  var157 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[4] <= 87.04999923706055) {
                                  var157 = [0.0, 0.0, 1.0];
                              } else {
                                  var157 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[2] <= 3.1259902715682983) {
                              if (input[1] <= 39.5) {
                                  var157 = [0.0, 0.0, 1.0];
                              } else {
                                  var157 = [0.0, 1.0, 0.0];
                              }
                          } else {
                              var157 = [0.0, 1.0, 0.0];
                          }
                      }
                  } else {
                      if (input[5] <= 12.233788967132568) {
                          if (input[5] <= 5.373710632324219) {
                              if (input[0] <= 6.886836528778076) {
                                  var157 = [0.0, 1.0, 0.0];
                              } else {
                                  var157 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var157 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          if (input[0] <= 12.162472248077393) {
                              if (input[1] <= 54.0) {
                                  var157 = [0.16666666666666666, 0.8333333333333334, 0.0];
                              } else {
                                  var157 = [0.0, 0.25, 0.75];
                              }
                          } else {
                              if (input[2] <= 4.318511128425598) {
                                  var157 = [0.0, 0.0, 1.0];
                              } else {
                                  var157 = [0.0, 1.0, 0.0];
                              }
                          }
                      }
                  }
              } else {
                  var157 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[0] <= 9.492175579071045) {
                  if (input[4] <= 84.1406021118164) {
                      var157 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[4] <= 84.27632522583008) {
                          var157 = [1.0, 0.0, 0.0];
                      } else {
                          var157 = [0.0, 1.0, 0.0];
                      }
                  }
              } else {
                  var157 = [0.0, 0.0, 1.0];
              }
          }
      } else {
          if (input[4] <= 83.37022018432617) {
              var157 = [0.0, 1.0, 0.0];
          } else {
              if (input[0] <= 6.819782733917236) {
                  var157 = [0.0, 0.0, 1.0];
              } else {
                  if (input[5] <= 90.6500015258789) {
                      if (input[1] <= 39.5) {
                          if (input[5] <= 44.0) {
                              if (input[5] <= 37.75) {
                                  var157 = [1.0, 0.0, 0.0];
                              } else {
                                  var157 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var157 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[4] <= 91.04999923706055) {
                              if (input[5] <= 46.22447967529297) {
                                  var157 = [0.25, 0.0, 0.75];
                              } else {
                                  var157 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var157 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[0] <= 13.016160011291504) {
                          var157 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[0] <= 14.088986873626709) {
                              var157 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[4] <= 90.57158279418945) {
                                  var157 = [1.0, 0.0, 0.0];
                              } else {
                                  var157 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              }
          }
      }
  } else {
      if (input[5] <= 67.67344284057617) {
          if (input[4] <= 84.5) {
              var157 = [0.0, 1.0, 0.0];
          } else {
              if (input[2] <= 4.477004528045654) {
                  if (input[4] <= 91.39402389526367) {
                      if (input[5] <= 56.220041275024414) {
                          var157 = [0.0, 0.0, 1.0];
                      } else {
                          var157 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[1] <= 45.0) {
                          var157 = [1.0, 0.0, 0.0];
                      } else {
                          var157 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  if (input[1] <= 25.5) {
                      var157 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[5] <= 32.93990707397461) {
                          if (input[1] <= 28.5) {
                              if (input[2] <= 6.050000190734863) {
                                  var157 = [1.0, 0.0, 0.0];
                              } else {
                                  var157 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var157 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var157 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      } else {
          if (input[4] <= 91.95000076293945) {
              if (input[0] <= 24.0) {
                  if (input[4] <= 91.04999923706055) {
                      if (input[2] <= 5.736835479736328) {
                          if (input[5] <= 279.8999938964844) {
                              if (input[0] <= 14.818799018859863) {
                                  var157 = [1.0, 0.0, 0.0];
                              } else {
                                  var157 = [0.009174311926605505, 0.0, 0.9908256880733946];
                              }
                          } else {
                              var157 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var157 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[1] <= 43.5) {
                          if (input[1] <= 25.0) {
                              var157 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[5] <= 116.4000015258789) {
                                  var157 = [0.7142857142857143, 0.0, 0.2857142857142857];
                              } else {
                                  var157 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[1] <= 45.5) {
                              var157 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[4] <= 91.2299919128418) {
                                  var157 = [1.0, 0.0, 0.0];
                              } else {
                                  var157 = [0.16666666666666666, 0.0, 0.8333333333333334];
                              }
                          }
                      }
                  }
              } else {
                  if (input[5] <= 88.79999923706055) {
                      if (input[1] <= 32.0) {
                          var157 = [1.0, 0.0, 0.0];
                      } else {
                          var157 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var157 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              var157 = [1.0, 0.0, 0.0];
          }
      }
  }
  var43 = addVec(var44, var157);
  let var158: HazardVector = [0, 0, 0];
  if (input[4] <= 84.73114776611328) {
      if (input[0] <= 4.566897630691528) {
          var158 = [0.0, 0.0, 1.0];
      } else {
          if (input[4] <= 84.16609573364258) {
              if (input[5] <= 3.332324981689453) {
                  if (input[0] <= 15.348978996276855) {
                      if (input[4] <= 80.70000076293945) {
                          var158 = [0.0, 1.0, 0.0];
                      } else {
                          var158 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var158 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[4] <= 83.99134063720703) {
                      var158 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[5] <= 18.546130180358887) {
                          var158 = [0.0, 1.0, 0.0];
                      } else {
                          var158 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          } else {
              if (input[0] <= 19.200000286102295) {
                  if (input[2] <= 7.7336485385894775) {
                      if (input[5] <= 7.470678806304932) {
                          var158 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[0] <= 7.959747791290283) {
                              if (input[0] <= 6.564395189285278) {
                                  var158 = [0.0, 1.0, 0.0];
                              } else {
                                  var158 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var158 = [0.0, 1.0, 0.0];
                          }
                      }
                  } else {
                      var158 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var158 = [0.0, 0.0, 1.0];
              }
          }
      }
  } else {
      if (input[4] <= 91.77841186523438) {
          if (input[4] <= 91.091796875) {
              if (input[1] <= 22.5) {
                  var158 = [0.0, 1.0, 0.0];
              } else {
                  if (input[4] <= 88.57223129272461) {
                      if (input[4] <= 84.84973907470703) {
                          if (input[4] <= 84.80176162719727) {
                              var158 = [0.0, 0.0, 1.0];
                          } else {
                              var158 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          if (input[2] <= 5.7493040561676025) {
                              var158 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[5] <= 22.091262817382812) {
                                  var158 = [0.375, 0.125, 0.5];
                              } else {
                                  var158 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  } else {
                      if (input[1] <= 70.0) {
                          if (input[0] <= 12.649999618530273) {
                              var158 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[2] <= 5.366742849349976) {
                                  var158 = [0.03968253968253968, 0.0, 0.9603174603174603];
                              } else {
                                  var158 = [0.5714285714285714, 0.0, 0.42857142857142855];
                              }
                          }
                      } else {
                          if (input[4] <= 90.72926712036133) {
                              var158 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[4] <= 90.97926712036133) {
                                  var158 = [0.0, 0.0, 1.0];
                              } else {
                                  var158 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              }
          } else {
              if (input[2] <= 4.358978986740112) {
                  if (input[4] <= 91.20571517944336) {
                      if (input[0] <= 22.949999809265137) {
                          var158 = [1.0, 0.0, 0.0];
                      } else {
                          var158 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[2] <= 2.0) {
                          if (input[0] <= 23.550000190734863) {
                              var158 = [0.0, 0.0, 1.0];
                          } else {
                              var158 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[4] <= 91.4671630859375) {
                              var158 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[5] <= 106.29999923706055) {
                                  var158 = [1.0, 0.0, 0.0];
                              } else {
                                  var158 = [0.15151515151515152, 0.0, 0.8484848484848485];
                              }
                          }
                      }
                  }
              } else {
                  if (input[5] <= 119.35000228881836) {
                      if (input[2] <= 4.700000047683716) {
                          if (input[0] <= 18.699999809265137) {
                              var158 = [0.0, 0.0, 1.0];
                          } else {
                              var158 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[4] <= 91.64999771118164) {
                              var158 = [0.0, 0.0, 1.0];
                          } else {
                              var158 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      var158 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[5] <= 113.84444427490234) {
              if (input[4] <= 92.0) {
                  if (input[4] <= 91.82735061645508) {
                      var158 = [1.0, 0.0, 0.0];
                  } else {
                      var158 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var158 = [1.0, 0.0, 0.0];
              }
          } else {
              var158 = [1.0, 0.0, 0.0];
          }
      }
  }
  var42 = addVec(var43, var158);
  let var159: HazardVector = [0, 0, 0];
  if (input[0] <= 15.187127113342285) {
      if (input[0] <= 7.369052410125732) {
          if (input[0] <= 4.580510377883911) {
              var159 = [0.0, 0.0, 1.0];
          } else {
              if (input[5] <= 27.10390567779541) {
                  if (input[1] <= 69.5) {
                      var159 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[5] <= 12.500569581985474) {
                          var159 = [0.0, 1.0, 0.0];
                      } else {
                          var159 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  var159 = [0.0, 0.0, 1.0];
              }
          }
      } else {
          if (input[2] <= 1.8390417098999023) {
              if (input[5] <= 7.460942506790161) {
                  var159 = [0.0, 1.0, 0.0];
              } else {
                  if (input[1] <= 54.5) {
                      if (input[2] <= 1.589001178741455) {
                          var159 = [0.0, 0.0, 1.0];
                      } else {
                          var159 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var159 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[4] <= 84.67908096313477) {
                  if (input[2] <= 7.777190446853638) {
                      if (input[5] <= 4.6710498332977295) {
                          if (input[1] <= 53.5) {
                              var159 = [0.0, 1.0, 0.0];
                          } else {
                              var159 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var159 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      var159 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[5] <= 144.94651794433594) {
                      if (input[0] <= 14.63691520690918) {
                          if (input[2] <= 3.5474252700805664) {
                              if (input[4] <= 91.3499984741211) {
                                  var159 = [0.0, 0.0, 1.0];
                              } else {
                                  var159 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[5] <= 49.254432678222656) {
                                  var159 = [0.5348837209302325, 0.06976744186046512, 0.3953488372093023];
                              } else {
                                  var159 = [0.03125, 0.0, 0.96875];
                              }
                          }
                      } else {
                          if (input[2] <= 4.9269537925720215) {
                              if (input[2] <= 4.226953744888306) {
                                  var159 = [1.0, 0.0, 0.0];
                              } else {
                                  var159 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var159 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[2] <= 3.799999952316284) {
                          if (input[2] <= 3.149999976158142) {
                              var159 = [1.0, 0.0, 0.0];
                          } else {
                              var159 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var159 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      }
  } else {
      if (input[4] <= 91.95000076293945) {
          if (input[4] <= 83.67634963989258) {
              var159 = [0.0, 1.0, 0.0];
          } else {
              if (input[2] <= 5.252848386764526) {
                  if (input[2] <= 1.0999999642372131) {
                      if (input[1] <= 36.0) {
                          var159 = [0.0, 0.0, 1.0];
                      } else {
                          var159 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[2] <= 4.42339301109314) {
                          if (input[4] <= 91.09317016601562) {
                              if (input[5] <= 279.8999938964844) {
                                  var159 = [0.0, 0.0, 1.0];
                              } else {
                                  var159 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[1] <= 50.5) {
                                  var159 = [0.5192307692307693, 0.0, 0.4807692307692308];
                              } else {
                                  var159 = [0.11538461538461539, 0.0, 0.8846153846153846];
                              }
                          }
                      } else {
                          if (input[1] <= 40.5) {
                              if (input[1] <= 25.5) {
                                  var159 = [0.2, 0.0, 0.8];
                              } else {
                                  var159 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[5] <= 147.8000030517578) {
                                  var159 = [0.16666666666666666, 0.0, 0.8333333333333334];
                              } else {
                                  var159 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[4] <= 89.8499984741211) {
                      if (input[5] <= 87.95000076293945) {
                          var159 = [0.0, 0.0, 1.0];
                      } else {
                          var159 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var159 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          var159 = [1.0, 0.0, 0.0];
      }
  }
  var41 = addVec(var42, var159);
  let var160: HazardVector = [0, 0, 0];
  if (input[4] <= 84.6620979309082) {
      if (input[2] <= 7.426400423049927) {
          if (input[4] <= 84.1453971862793) {
              if (input[0] <= 13.27070140838623) {
                  var160 = [0.0, 1.0, 0.0];
              } else {
                  if (input[1] <= 72.5) {
                      var160 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[5] <= 26.884543657302856) {
                          var160 = [0.0, 0.0, 1.0];
                      } else {
                          var160 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[1] <= 39.0) {
                  if (input[5] <= 45.12259578704834) {
                      var160 = [0.0, 1.0, 0.0];
                  } else {
                      var160 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[5] <= 7.33432674407959) {
                      var160 = [1.0, 0.0, 0.0];
                  } else {
                      var160 = [0.0, 1.0, 0.0];
                  }
              }
          }
      } else {
          var160 = [0.0, 0.0, 1.0];
      }
  } else {
      if (input[4] <= 92.0) {
          if (input[4] <= 91.09317016601562) {
              if (input[0] <= 6.917944431304932) {
                  if (input[2] <= 7.892725706100464) {
                      if (input[1] <= 56.5) {
                          var160 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[1] <= 63.0) {
                              if (input[4] <= 84.75569915771484) {
                                  var160 = [0.0, 0.0, 1.0];
                              } else {
                                  var160 = [0.0, 1.0, 0.0];
                              }
                          } else {
                              var160 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      var160 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[1] <= 72.5) {
                      if (input[1] <= 47.5) {
                          if (input[4] <= 84.87357711791992) {
                              var160 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[5] <= 151.89999389648438) {
                                  var160 = [0.030864197530864196, 0.0, 0.9691358024691358];
                              } else {
                                  var160 = [0.3333333333333333, 0.0, 0.6666666666666666];
                              }
                          }
                      } else {
                          if (input[1] <= 50.5) {
                              if (input[4] <= 88.28359985351562) {
                                  var160 = [0.0, 1.0, 0.0];
                              } else {
                                  var160 = [0.3333333333333333, 0.0, 0.6666666666666666];
                              }
                          } else {
                              if (input[5] <= 18.050000190734863) {
                                  var160 = [0.0, 0.0, 1.0];
                              } else {
                                  var160 = [0.3050847457627119, 0.0, 0.6949152542372882];
                              }
                          }
                      }
                  } else {
                      if (input[5] <= 158.5999984741211) {
                          if (input[2] <= 6.450000047683716) {
                              var160 = [0.0, 0.0, 1.0];
                          } else {
                              var160 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var160 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[2] <= 3.959672212600708) {
                  if (input[4] <= 91.34402465820312) {
                      if (input[5] <= 97.25) {
                          var160 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[1] <= 30.5) {
                              if (input[4] <= 91.14999771118164) {
                                  var160 = [0.0, 0.0, 1.0];
                              } else {
                                  var160 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var160 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[1] <= 43.5) {
                          if (input[2] <= 2.9124159812927246) {
                              if (input[2] <= 1.818620502948761) {
                                  var160 = [1.0, 0.0, 0.0];
                              } else {
                                  var160 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var160 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[4] <= 91.60384750366211) {
                              if (input[1] <= 52.5) {
                                  var160 = [0.6, 0.0, 0.4];
                              } else {
                                  var160 = [0.06666666666666667, 0.0, 0.9333333333333333];
                              }
                          } else {
                              var160 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  if (input[0] <= 17.896259307861328) {
                      var160 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[4] <= 91.54999923706055) {
                          if (input[5] <= 118.87268829345703) {
                              if (input[1] <= 41.0) {
                                  var160 = [1.0, 0.0, 0.0];
                              } else {
                                  var160 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              }
                          } else {
                              var160 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[0] <= 18.699999809265137) {
                              var160 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[2] <= 4.348857164382935) {
                                  var160 = [0.0, 0.0, 1.0];
                              } else {
                                  var160 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              }
          }
      } else {
          var160 = [1.0, 0.0, 0.0];
      }
  }
  var40 = addVec(var41, var160);
  let var161: HazardVector = [0, 0, 0];
  if (input[5] <= 67.67344284057617) {
      if (input[4] <= 84.6053695678711) {
          if (input[1] <= 73.5) {
              if (input[0] <= 4.862499475479126) {
                  if (input[5] <= 15.705793380737305) {
                      var161 = [0.0, 1.0, 0.0];
                  } else {
                      var161 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[2] <= 7.796332597732544) {
                      var161 = [0.0, 1.0, 0.0];
                  } else {
                      var161 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[2] <= 3.25087308883667) {
                  if (input[0] <= 6.5137856006622314) {
                      var161 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[4] <= 83.3826904296875) {
                          var161 = [0.0, 0.0, 1.0];
                      } else {
                          var161 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  var161 = [0.0, 1.0, 0.0];
              }
          }
      } else {
          if (input[4] <= 90.75) {
              if (input[1] <= 23.5) {
                  var161 = [0.0, 1.0, 0.0];
              } else {
                  if (input[5] <= 18.889466285705566) {
                      if (input[5] <= 18.225107192993164) {
                          if (input[0] <= 13.591691970825195) {
                              var161 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[1] <= 48.5) {
                                  var161 = [0.0, 1.0, 0.0];
                              } else {
                                  var161 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          var161 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      if (input[0] <= 7.317944526672363) {
                          if (input[2] <= 4.802090406417847) {
                              var161 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[5] <= 26.550472259521484) {
                                  var161 = [0.0, 1.0, 0.0];
                              } else {
                                  var161 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[2] <= 5.355514287948608) {
                              if (input[5] <= 49.19999885559082) {
                                  var161 = [0.0, 0.0, 1.0];
                              } else {
                                  var161 = [0.058823529411764705, 0.0, 0.9411764705882353];
                              }
                          } else {
                              if (input[0] <= 16.631765365600586) {
                                  var161 = [0.2777777777777778, 0.0, 0.7222222222222222];
                              } else {
                                  var161 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              }
          } else {
              if (input[0] <= 17.627436637878418) {
                  var161 = [1.0, 0.0, 0.0];
              } else {
                  if (input[1] <= 36.5) {
                      var161 = [1.0, 0.0, 0.0];
                  } else {
                      var161 = [0.0, 0.0, 1.0];
                  }
              }
          }
      }
  } else {
      if (input[4] <= 92.0) {
          if (input[2] <= 4.476953744888306) {
              if (input[2] <= 1.818620502948761) {
                  if (input[5] <= 102.19999694824219) {
                      if (input[0] <= 14.25) {
                          var161 = [1.0, 0.0, 0.0];
                      } else {
                          var161 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[4] <= 91.20000076293945) {
                          var161 = [0.0, 0.0, 1.0];
                      } else {
                          var161 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[4] <= 90.99648666381836) {
                      if (input[4] <= 90.14999771118164) {
                          if (input[4] <= 90.06194686889648) {
                              if (input[5] <= 201.95000457763672) {
                                  var161 = [0.0, 0.0, 1.0];
                              } else {
                                  var161 = [0.5, 0.0, 0.5];
                              }
                          } else {
                              var161 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var161 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[1] <= 62.0) {
                          if (input[5] <= 98.69342803955078) {
                              var161 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[1] <= 43.5) {
                                  var161 = [0.2903225806451613, 0.0, 0.7096774193548387];
                              } else {
                                  var161 = [0.02, 0.0, 0.98];
                              }
                          }
                      } else {
                          var161 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[0] <= 12.976807594299316) {
                  var161 = [1.0, 0.0, 0.0];
              } else {
                  if (input[0] <= 14.149999618530273) {
                      var161 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[5] <= 117.81520080566406) {
                          if (input[5] <= 100.4000015258789) {
                              if (input[0] <= 17.25) {
                                  var161 = [0.6, 0.0, 0.4];
                              } else {
                                  var161 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[5] <= 106.49416732788086) {
                                  var161 = [0.0, 0.0, 1.0];
                              } else {
                                  var161 = [0.2857142857142857, 0.0, 0.7142857142857143];
                              }
                          }
                      } else {
                          var161 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      } else {
          var161 = [1.0, 0.0, 0.0];
      }
  }
  var39 = addVec(var40, var161);
  let var162: HazardVector = [0, 0, 0];
  if (input[5] <= 72.0999984741211) {
      if (input[4] <= 84.58238983154297) {
          if (input[5] <= 3.332324981689453) {
              if (input[4] <= 80.70000076293945) {
                  var162 = [0.0, 1.0, 0.0];
              } else {
                  var162 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[2] <= 7.047373294830322) {
                  if (input[2] <= 2.8750447034835815) {
                      if (input[0] <= 11.298969268798828) {
                          var162 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[0] <= 12.022536754608154) {
                              var162 = [0.0, 0.0, 1.0];
                          } else {
                              var162 = [0.0, 1.0, 0.0];
                          }
                      }
                  } else {
                      var162 = [0.0, 1.0, 0.0];
                  }
              } else {
                  var162 = [0.0, 0.0, 1.0];
              }
          }
      } else {
          if (input[4] <= 90.96366500854492) {
              if (input[1] <= 23.0) {
                  var162 = [0.0, 1.0, 0.0];
              } else {
                  if (input[4] <= 89.87937545776367) {
                      if (input[0] <= 6.528637886047363) {
                          if (input[2] <= 4.954414367675781) {
                              var162 = [0.0, 0.0, 1.0];
                          } else {
                              var162 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          if (input[5] <= 19.554295539855957) {
                              if (input[2] <= 3.978654384613037) {
                                  var162 = [0.0, 0.0, 1.0];
                              } else {
                                  var162 = [0.08695652173913043, 0.21739130434782608, 0.6956521739130435];
                              }
                          } else {
                              if (input[4] <= 89.25) {
                                  var162 = [0.0, 0.0, 1.0];
                              } else {
                                  var162 = [0.09090909090909091, 0.0, 0.9090909090909091];
                              }
                          }
                      }
                  } else {
                      if (input[0] <= 24.04664421081543) {
                          if (input[1] <= 44.5) {
                              if (input[2] <= 6.950000047683716) {
                                  var162 = [0.0, 0.0, 1.0];
                              } else {
                                  var162 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var162 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var162 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              var162 = [1.0, 0.0, 0.0];
          }
      }
  } else {
      if (input[4] <= 91.78664779663086) {
          if (input[1] <= 71.5) {
              if (input[4] <= 91.091796875) {
                  if (input[2] <= 7.460921764373779) {
                      if (input[5] <= 279.8999938964844) {
                          if (input[2] <= 5.283337354660034) {
                              if (input[1] <= 65.5) {
                                  var162 = [0.03529411764705882, 0.0, 0.9647058823529412];
                              } else {
                                  var162 = [0.2222222222222222, 0.0, 0.7777777777777778];
                              }
                          } else {
                              if (input[2] <= 5.536835432052612) {
                                  var162 = [0.5, 0.0, 0.5];
                              } else {
                                  var162 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          var162 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var162 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[4] <= 91.20571517944336) {
                      if (input[0] <= 22.84999942779541) {
                          var162 = [1.0, 0.0, 0.0];
                      } else {
                          var162 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[0] <= 20.699999809265137) {
                          if (input[2] <= 4.700000047683716) {
                              var162 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[0] <= 18.649999618530273) {
                                  var162 = [0.5, 0.0, 0.5];
                              } else {
                                  var162 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[1] <= 51.0) {
                              if (input[1] <= 38.0) {
                                  var162 = [1.0, 0.0, 0.0];
                              } else {
                                  var162 = [0.8, 0.0, 0.2];
                              }
                          } else {
                              var162 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              }
          } else {
              if (input[2] <= 2.0) {
                  var162 = [0.0, 0.0, 1.0];
              } else {
                  if (input[2] <= 3.799999952316284) {
                      if (input[5] <= 144.94651794433594) {
                          var162 = [0.0, 0.0, 1.0];
                      } else {
                          var162 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var162 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[2] <= 3.3499999046325684) {
              if (input[0] <= 15.867774963378906) {
                  var162 = [0.0, 0.0, 1.0];
              } else {
                  if (input[4] <= 91.95000076293945) {
                      if (input[5] <= 141.59444046020508) {
                          var162 = [0.0, 0.0, 1.0];
                      } else {
                          var162 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var162 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              var162 = [1.0, 0.0, 0.0];
          }
      }
  }
  var38 = addVec(var39, var162);
  let var163: HazardVector = [0, 0, 0];
  if (input[2] <= 3.474171757698059) {
      if (input[0] <= 12.051507949829102) {
          if (input[4] <= 84.54999923706055) {
              var163 = [0.0, 1.0, 0.0];
          } else {
              if (input[2] <= 2.649999976158142) {
                  if (input[0] <= 8.900000095367432) {
                      var163 = [1.0, 0.0, 0.0];
                  } else {
                      var163 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var163 = [0.0, 0.0, 1.0];
              }
          }
      } else {
          if (input[0] <= 23.899999618530273) {
              if (input[5] <= 9.508320808410645) {
                  if (input[4] <= 81.9432258605957) {
                      var163 = [0.0, 0.0, 1.0];
                  } else {
                      var163 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[2] <= 2.67608106136322) {
                      if (input[4] <= 91.94768142700195) {
                          if (input[4] <= 91.3799934387207) {
                              if (input[4] <= 80.40261459350586) {
                                  var163 = [0.0, 1.0, 0.0];
                              } else {
                                  var163 = [0.031914893617021274, 0.0, 0.9680851063829787];
                              }
                          } else {
                              if (input[1] <= 38.5) {
                                  var163 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              } else {
                                  var163 = [0.21052631578947367, 0.0, 0.7894736842105263];
                              }
                          }
                      } else {
                          var163 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[5] <= 72.62344360351562) {
                          if (input[4] <= 85.0993881225586) {
                              var163 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[0] <= 21.600000381469727) {
                                  var163 = [0.125, 0.0, 0.875];
                              } else {
                                  var163 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[4] <= 91.71705627441406) {
                              if (input[2] <= 2.763600707054138) {
                                  var163 = [0.38461538461538464, 0.0, 0.6153846153846154];
                              } else {
                                  var163 = [0.07142857142857142, 0.0, 0.9285714285714286];
                              }
                          } else {
                              if (input[5] <= 105.3499984741211) {
                                  var163 = [1.0, 0.0, 0.0];
                              } else {
                                  var163 = [0.875, 0.0, 0.125];
                              }
                          }
                      }
                  }
              }
          } else {
              if (input[0] <= 24.549999237060547) {
                  if (input[5] <= 87.85000228881836) {
                      var163 = [0.0, 0.0, 1.0];
                  } else {
                      var163 = [1.0, 0.0, 0.0];
                  }
              } else {
                  var163 = [1.0, 0.0, 0.0];
              }
          }
      }
  } else {
      if (input[5] <= 66.31883430480957) {
          if (input[0] <= 7.454452276229858) {
              if (input[0] <= 4.580510377883911) {
                  var163 = [0.0, 0.0, 1.0];
              } else {
                  if (input[2] <= 4.535648584365845) {
                      if (input[2] <= 4.402753591537476) {
                          if (input[4] <= 84.7857894897461) {
                              var163 = [0.0, 1.0, 0.0];
                          } else {
                              var163 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var163 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[5] <= 27.122562408447266) {
                          var163 = [0.0, 1.0, 0.0];
                      } else {
                          var163 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          } else {
              if (input[4] <= 84.6620979309082) {
                  var163 = [0.0, 1.0, 0.0];
              } else {
                  if (input[4] <= 89.25) {
                      if (input[5] <= 21.03427505493164) {
                          if (input[5] <= 12.300000190734863) {
                              var163 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[2] <= 6.025541543960571) {
                                  var163 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              } else {
                                  var163 = [0.0, 1.0, 0.0];
                              }
                          }
                      } else {
                          var163 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[0] <= 17.479836463928223) {
                          if (input[5] <= 36.85000038146973) {
                              var163 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[0] <= 10.950000286102295) {
                                  var163 = [0.0, 0.0, 1.0];
                              } else {
                                  var163 = [0.9333333333333333, 0.0, 0.06666666666666667];
                              }
                          }
                      } else {
                          if (input[2] <= 4.25) {
                              var163 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[2] <= 4.8028483390808105) {
                                  var163 = [1.0, 0.0, 0.0];
                              } else {
                                  var163 = [0.25, 0.0, 0.75];
                              }
                          }
                      }
                  }
              }
          }
      } else {
          if (input[4] <= 91.77841186523438) {
              if (input[5] <= 130.9000015258789) {
                  if (input[2] <= 4.362565517425537) {
                      var163 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[0] <= 16.09999942779541) {
                          if (input[2] <= 7.150000095367432) {
                              if (input[0] <= 14.299999713897705) {
                                  var163 = [0.0, 0.0, 1.0];
                              } else {
                                  var163 = [0.2, 0.0, 0.8];
                              }
                          } else {
                              var163 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[5] <= 109.45000076293945) {
                              if (input[0] <= 17.25) {
                                  var163 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              } else {
                                  var163 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[2] <= 5.150000095367432) {
                                  var163 = [0.3333333333333333, 0.0, 0.6666666666666666];
                              } else {
                                  var163 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[1] <= 44.5) {
                      var163 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[2] <= 3.799999952316284) {
                          var163 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 139.67286682128906) {
                              var163 = [0.0, 0.0, 1.0];
                          } else {
                              var163 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          } else {
              var163 = [1.0, 0.0, 0.0];
          }
      }
  }
  var37 = addVec(var38, var163);
  let var164: HazardVector = [0, 0, 0];
  if (input[1] <= 36.5) {
      if (input[0] <= 13.140066623687744) {
          if (input[1] <= 29.0) {
              var164 = [0.0, 1.0, 0.0];
          } else {
              if (input[4] <= 87.30973815917969) {
                  var164 = [0.0, 1.0, 0.0];
              } else {
                  if (input[0] <= 9.75) {
                      var164 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[2] <= 5.150000095367432) {
                          var164 = [0.0, 0.0, 1.0];
                      } else {
                          var164 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      } else {
          if (input[5] <= 46.1650390625) {
              if (input[1] <= 26.5) {
                  if (input[5] <= 14.705416798591614) {
                      var164 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[5] <= 31.937993049621582) {
                          var164 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[2] <= 3.799999952316284) {
                              var164 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[2] <= 4.950000047683716) {
                                  var164 = [0.8333333333333334, 0.0, 0.16666666666666666];
                              } else {
                                  var164 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[5] <= 23.15000057220459) {
                      var164 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[5] <= 44.76503944396973) {
                          if (input[2] <= 4.8733930587768555) {
                              if (input[4] <= 91.05570983886719) {
                                  var164 = [0.0, 0.0, 1.0];
                              } else {
                                  var164 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[4] <= 89.89999771118164) {
                                  var164 = [0.0, 0.0, 1.0];
                              } else {
                                  var164 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          var164 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[0] <= 23.667651176452637) {
                  if (input[0] <= 21.34999942779541) {
                      if (input[1] <= 29.0) {
                          var164 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[4] <= 90.8499984741211) {
                              if (input[0] <= 18.53829860687256) {
                                  var164 = [0.0, 1.0, 0.0];
                              } else {
                                  var164 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var164 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[5] <= 82.85000228881836) {
                          if (input[4] <= 86.88666915893555) {
                              var164 = [0.0, 1.0, 0.0];
                          } else {
                              var164 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[5] <= 113.70000076293945) {
                              if (input[1] <= 30.0) {
                                  var164 = [0.5, 0.0, 0.5];
                              } else {
                                  var164 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[4] <= 91.9000015258789) {
                                  var164 = [0.0, 0.0, 1.0];
                              } else {
                                  var164 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[1] <= 34.5) {
                      if (input[1] <= 27.5) {
                          var164 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[5] <= 79.35000228881836) {
                              if (input[0] <= 26.100000381469727) {
                                  var164 = [0.0, 0.0, 1.0];
                              } else {
                                  var164 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var164 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[5] <= 93.95000076293945) {
                          if (input[2] <= 3.149999976158142) {
                              var164 = [0.0, 1.0, 0.0];
                          } else {
                              var164 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var164 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      }
  } else {
      if (input[4] <= 84.58483505249023) {
          if (input[1] <= 73.5) {
              if (input[1] <= 55.5) {
                  var164 = [0.0, 1.0, 0.0];
              } else {
                  if (input[2] <= 7.599999904632568) {
                      var164 = [0.0, 1.0, 0.0];
                  } else {
                      var164 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[0] <= 12.460035800933838) {
                  var164 = [0.0, 1.0, 0.0];
              } else {
                  if (input[4] <= 76.72036361694336) {
                      var164 = [0.0, 1.0, 0.0];
                  } else {
                      var164 = [0.0, 0.0, 1.0];
                  }
              }
          }
      } else {
          if (input[0] <= 23.09999942779541) {
              if (input[4] <= 91.95000076293945) {
                  if (input[2] <= 4.891844987869263) {
                      if (input[4] <= 84.74103546142578) {
                          var164 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[4] <= 91.09317016601562) {
                              if (input[2] <= 0.9216743409633636) {
                                  var164 = [1.0, 0.0, 0.0];
                              } else {
                                  var164 = [0.020689655172413793, 0.0, 0.9793103448275862];
                              }
                          } else {
                              if (input[1] <= 86.5) {
                                  var164 = [0.15789473684210525, 0.0, 0.8421052631578947];
                              } else {
                                  var164 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      if (input[5] <= 66.55000114440918) {
                          if (input[2] <= 6.193793773651123) {
                              if (input[5] <= 26.550000190734863) {
                                  var164 = [0.375, 0.375, 0.25];
                              } else {
                                  var164 = [0.11764705882352941, 0.0, 0.8823529411764706];
                              }
                          } else {
                              var164 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[2] <= 6.160922050476074) {
                              if (input[5] <= 139.67286682128906) {
                                  var164 = [0.44, 0.0, 0.56];
                              } else {
                                  var164 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var164 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  var164 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[5] <= 93.0) {
                  if (input[5] <= 71.67972946166992) {
                      var164 = [1.0, 0.0, 0.0];
                  } else {
                      var164 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var164 = [1.0, 0.0, 0.0];
              }
          }
      }
  }
  var36 = addVec(var37, var164);
  let var165: HazardVector = [0, 0, 0];
  if (input[0] <= 15.469113826751709) {
      if (input[0] <= 10.05854845046997) {
          if (input[4] <= 83.96465301513672) {
              var165 = [0.0, 1.0, 0.0];
          } else {
              if (input[2] <= 8.25) {
                  if (input[2] <= 2.54090815782547) {
                      var165 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[3] <= 0.10000000149011612) {
                          if (input[4] <= 84.72171020507812) {
                              if (input[5] <= 26.992615699768066) {
                                  var165 = [0.07692307692307693, 0.8461538461538461, 0.07692307692307693];
                              } else {
                                  var165 = [0.0, 0.2, 0.8];
                              }
                          } else {
                              var165 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var165 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[4] <= 85.0) {
                      var165 = [0.0, 0.0, 1.0];
                  } else {
                      var165 = [0.0, 1.0, 0.0];
                  }
              }
          }
      } else {
          if (input[4] <= 84.79343032836914) {
              if (input[0] <= 13.359073638916016) {
                  if (input[5] <= 3.4442325830459595) {
                      var165 = [0.0, 0.0, 1.0];
                  } else {
                      var165 = [0.0, 1.0, 0.0];
                  }
              } else {
                  var165 = [0.0, 1.0, 0.0];
              }
          } else {
              if (input[4] <= 88.45000076293945) {
                  if (input[1] <= 48.5) {
                      var165 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[1] <= 50.5) {
                          var165 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[4] <= 85.92582321166992) {
                              if (input[4] <= 85.2347640991211) {
                                  var165 = [0.0, 0.0, 1.0];
                              } else {
                                  var165 = [0.0, 0.6666666666666666, 0.3333333333333333];
                              }
                          } else {
                              var165 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  if (input[2] <= 2.285422146320343) {
                      if (input[4] <= 90.28228759765625) {
                          var165 = [1.0, 0.0, 0.0];
                      } else {
                          var165 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[1] <= 71.5) {
                          if (input[5] <= 117.25) {
                              if (input[4] <= 90.3499984741211) {
                                  var165 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              } else {
                                  var165 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[4] <= 89.75) {
                                  var165 = [1.0, 0.0, 0.0];
                              } else {
                                  var165 = [0.13333333333333333, 0.0, 0.8666666666666667];
                              }
                          }
                      } else {
                          if (input[4] <= 89.16718673706055) {
                              if (input[4] <= 88.76718521118164) {
                                  var165 = [1.0, 0.0, 0.0];
                              } else {
                                  var165 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var165 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          }
      }
  } else {
      if (input[4] <= 91.78664779663086) {
          if (input[2] <= 4.469991445541382) {
              if (input[0] <= 24.949999809265137) {
                  if (input[1] <= 67.5) {
                      if (input[4] <= 83.0) {
                          var165 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[5] <= 129.8000030517578) {
                              if (input[5] <= 31.214743614196777) {
                                  var165 = [0.4, 0.0, 0.6];
                              } else {
                                  var165 = [0.05921052631578947, 0.0, 0.9407894736842105];
                              }
                          } else {
                              if (input[1] <= 44.5) {
                                  var165 = [1.0, 0.0, 0.0];
                              } else {
                                  var165 = [0.06666666666666667, 0.0, 0.9333333333333333];
                              }
                          }
                      }
                  } else {
                      var165 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[0] <= 25.313777923583984) {
                      var165 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[4] <= 86.29999923706055) {
                          var165 = [0.0, 1.0, 0.0];
                      } else {
                          var165 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[0] <= 20.90000057220459) {
                  if (input[2] <= 5.478316783905029) {
                      if (input[1] <= 34.0) {
                          if (input[4] <= 86.3557243347168) {
                              var165 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[5] <= 32.71798324584961) {
                                  var165 = [0.0, 0.0, 1.0];
                              } else {
                                  var165 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[5] <= 90.85762786865234) {
                              if (input[4] <= 78.22036361694336) {
                                  var165 = [0.0, 1.0, 0.0];
                              } else {
                                  var165 = [0.14285714285714285, 0.0, 0.8571428571428571];
                              }
                          } else {
                              if (input[5] <= 123.30000305175781) {
                                  var165 = [0.625, 0.0, 0.375];
                              } else {
                                  var165 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      if (input[1] <= 58.0) {
                          if (input[4] <= 89.77834701538086) {
                              var165 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[1] <= 42.5) {
                                  var165 = [1.0, 0.0, 0.0];
                              } else {
                                  var165 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[2] <= 7.4857988357543945) {
                              var165 = [0.0, 1.0, 0.0];
                          } else {
                              var165 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  if (input[2] <= 5.108530282974243) {
                      if (input[5] <= 114.1500015258789) {
                          if (input[4] <= 84.75424194335938) {
                              var165 = [0.0, 1.0, 0.0];
                          } else {
                              var165 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var165 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var165 = [0.0, 1.0, 0.0];
                  }
              }
          }
      } else {
          if (input[4] <= 91.95000076293945) {
              if (input[4] <= 91.82258605957031) {
                  var165 = [1.0, 0.0, 0.0];
              } else {
                  var165 = [0.0, 0.0, 1.0];
              }
          } else {
              var165 = [1.0, 0.0, 0.0];
          }
      }
  }
  var35 = addVec(var36, var165);
  let var166: HazardVector = [0, 0, 0];
  if (input[0] <= 15.187127113342285) {
      if (input[4] <= 84.67908096313477) {
          if (input[0] <= 4.566897630691528) {
              var166 = [0.0, 0.0, 1.0];
          } else {
              if (input[5] <= 3.399999976158142) {
                  if (input[5] <= 2.8351413011550903) {
                      var166 = [0.0, 1.0, 0.0];
                  } else {
                      var166 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[2] <= 7.796332597732544) {
                      if (input[1] <= 58.5) {
                          var166 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[2] <= 6.485450744628906) {
                              if (input[0] <= 11.677746295928955) {
                                  var166 = [0.0, 1.0, 0.0];
                              } else {
                                  var166 = [0.0, 0.6666666666666666, 0.3333333333333333];
                              }
                          } else {
                              var166 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      var166 = [0.0, 0.0, 1.0];
                  }
              }
          }
      } else {
          if (input[4] <= 89.16718673706055) {
              if (input[1] <= 34.0) {
                  var166 = [0.0, 1.0, 0.0];
              } else {
                  if (input[0] <= 12.697193145751953) {
                      if (input[2] <= 5.632672309875488) {
                          var166 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[1] <= 45.5) {
                              if (input[2] <= 5.998931407928467) {
                                  var166 = [1.0, 0.0, 0.0];
                              } else {
                                  var166 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var166 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[2] <= 5.105146169662476) {
                          if (input[5] <= 9.974043846130371) {
                              var166 = [0.0, 1.0, 0.0];
                          } else {
                              var166 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[4] <= 87.35000228881836) {
                              var166 = [0.0, 1.0, 0.0];
                          } else {
                              var166 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          } else {
              if (input[0] <= 12.350460529327393) {
                  if (input[5] <= 103.70000076293945) {
                      var166 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[4] <= 91.54999923706055) {
                          var166 = [1.0, 0.0, 0.0];
                      } else {
                          var166 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  if (input[0] <= 13.25) {
                      if (input[4] <= 91.54999923706055) {
                          var166 = [0.0, 0.0, 1.0];
                      } else {
                          var166 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[0] <= 13.366159915924072) {
                          var166 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[1] <= 69.5) {
                              if (input[4] <= 90.28228759765625) {
                                  var166 = [0.8333333333333334, 0.0, 0.16666666666666666];
                              } else {
                                  var166 = [0.09090909090909091, 0.0, 0.9090909090909091];
                              }
                          } else {
                              var166 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          }
      }
  } else {
      if (input[4] <= 91.95000076293945) {
          if (input[2] <= 5.116922378540039) {
              if (input[1] <= 30.5) {
                  if (input[4] <= 91.14999771118164) {
                      if (input[4] <= 83.67634963989258) {
                          var166 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[0] <= 16.808823585510254) {
                              var166 = [1.0, 0.0, 0.0];
                          } else {
                              var166 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[5] <= 104.31684494018555) {
                          var166 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[5] <= 119.56684494018555) {
                              var166 = [0.0, 0.0, 1.0];
                          } else {
                              var166 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  if (input[4] <= 83.0) {
                      var166 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[0] <= 24.549999237060547) {
                          if (input[2] <= 1.0999999642372131) {
                              var166 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[2] <= 3.959672212600708) {
                                  var166 = [0.06707317073170732, 0.0, 0.9329268292682927];
                              } else {
                                  var166 = [0.3103448275862069, 0.0, 0.6896551724137931];
                              }
                          }
                      } else {
                          var166 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[4] <= 84.9079704284668) {
                  var166 = [0.0, 1.0, 0.0];
              } else {
                  if (input[2] <= 6.254245758056641) {
                      if (input[4] <= 90.42288208007812) {
                          var166 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[1] <= 53.0) {
                              if (input[1] <= 47.0) {
                                  var166 = [1.0, 0.0, 0.0];
                              } else {
                                  var166 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var166 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[2] <= 6.992718935012817) {
                          var166 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[0] <= 18.799341201782227) {
                              if (input[5] <= 38.392136573791504) {
                                  var166 = [0.0, 0.0, 1.0];
                              } else {
                                  var166 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var166 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          }
      } else {
          var166 = [1.0, 0.0, 0.0];
      }
  }
  var34 = addVec(var35, var166);
  let var167: HazardVector = [0, 0, 0];
  if (input[5] <= 71.4775161743164) {
      if (input[4] <= 85.76995086669922) {
          if (input[0] <= 4.580510377883911) {
              var167 = [0.0, 0.0, 1.0];
          } else {
              if (input[4] <= 84.8491325378418) {
                  if (input[0] <= 4.8123204708099365) {
                      if (input[4] <= 82.17412948608398) {
                          var167 = [0.0, 1.0, 0.0];
                      } else {
                          var167 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[1] <= 52.5) {
                          var167 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[4] <= 84.53310012817383) {
                              if (input[2] <= 7.326367139816284) {
                                  var167 = [0.006250000000000001, 0.9812500000000001, 0.012500000000000002];
                              } else {
                                  var167 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[1] <= 56.5) {
                                  var167 = [0.0, 0.0, 1.0];
                              } else {
                                  var167 = [0.0, 1.0, 0.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[4] <= 85.39124298095703) {
                      var167 = [0.0, 0.0, 1.0];
                  } else {
                      var167 = [0.0, 1.0, 0.0];
                  }
              }
          }
      } else {
          if (input[2] <= 5.678316831588745) {
              if (input[4] <= 90.75571060180664) {
                  if (input[0] <= 24.699999809265137) {
                      if (input[4] <= 89.8499984741211) {
                          var167 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[4] <= 90.24871826171875) {
                              if (input[5] <= 38.64999961853027) {
                                  var167 = [1.0, 0.0, 0.0];
                              } else {
                                  var167 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var167 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      var167 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[1] <= 37.0) {
                      var167 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[4] <= 91.31366348266602) {
                          if (input[4] <= 90.91366577148438) {
                              var167 = [1.0, 0.0, 0.0];
                          } else {
                              var167 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var167 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[1] <= 51.5) {
                  if (input[1] <= 45.5) {
                      if (input[1] <= 28.5) {
                          if (input[1] <= 25.5) {
                              if (input[2] <= 6.170847654342651) {
                                  var167 = [0.0, 0.0, 1.0];
                              } else {
                                  var167 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var167 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var167 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[4] <= 89.25) {
                          var167 = [0.0, 0.0, 1.0];
                      } else {
                          var167 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  var167 = [0.0, 1.0, 0.0];
              }
          }
      }
  } else {
      if (input[1] <= 30.5) {
          if (input[5] <= 77.1500015258789) {
              var167 = [0.0, 0.0, 1.0];
          } else {
              if (input[2] <= 3.799999952316284) {
                  if (input[1] <= 24.5) {
                      if (input[4] <= 91.6593132019043) {
                          var167 = [0.0, 0.0, 1.0];
                      } else {
                          var167 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[4] <= 90.0) {
                          var167 = [0.0, 0.0, 1.0];
                      } else {
                          var167 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  var167 = [1.0, 0.0, 0.0];
              }
          }
      } else {
          if (input[5] <= 138.75) {
              if (input[5] <= 125.29999923706055) {
                  if (input[5] <= 114.85000228881836) {
                      if (input[4] <= 92.0) {
                          if (input[0] <= 14.818799018859863) {
                              if (input[2] <= 3.8000000715255737) {
                                  var167 = [0.3333333333333333, 0.0, 0.6666666666666666];
                              } else {
                                  var167 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[0] <= 22.321537017822266) {
                                  var167 = [0.22972972972972974, 0.0, 0.7702702702702703];
                              } else {
                                  var167 = [0.038461538461538464, 0.0, 0.9615384615384616];
                              }
                          }
                      } else {
                          var167 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var167 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[2] <= 3.549999952316284) {
                      if (input[4] <= 91.28083419799805) {
                          var167 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 134.10000610351562) {
                              var167 = [1.0, 0.0, 0.0];
                          } else {
                              var167 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[2] <= 4.20613956451416) {
                          var167 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[4] <= 91.04999923706055) {
                              var167 = [0.0, 0.0, 1.0];
                          } else {
                              var167 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          } else {
              if (input[1] <= 44.5) {
                  var167 = [1.0, 0.0, 0.0];
              } else {
                  if (input[1] <= 57.5) {
                      if (input[4] <= 92.45000076293945) {
                          if (input[2] <= 2.2886319160461426) {
                              if (input[0] <= 20.649999618530273) {
                                  var167 = [0.0, 0.0, 1.0];
                              } else {
                                  var167 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var167 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var167 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[2] <= 3.799999952316284) {
                          if (input[4] <= 89.16718673706055) {
                              var167 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[4] <= 90.5) {
                                  var167 = [1.0, 0.0, 0.0];
                              } else {
                                  var167 = [0.5, 0.0, 0.5];
                              }
                          }
                      } else {
                          var167 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      }
  }
  var33 = addVec(var34, var167);
  let var168: HazardVector = [0, 0, 0];
  if (input[1] <= 67.5) {
      if (input[2] <= 3.978654384613037) {
          if (input[2] <= 3.603128433227539) {
              if (input[4] <= 84.25) {
                  var168 = [0.0, 1.0, 0.0];
              } else {
                  if (input[5] <= 57.19999885559082) {
                      if (input[4] <= 90.75571060180664) {
                          if (input[4] <= 84.73271560668945) {
                              var168 = [0.0, 1.0, 0.0];
                          } else {
                              var168 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[5] <= 34.30000114440918) {
                              var168 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[1] <= 39.5) {
                                  var168 = [0.0, 0.0, 1.0];
                              } else {
                                  var168 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              }
                          }
                      }
                  } else {
                      if (input[4] <= 92.0) {
                          if (input[2] <= 1.818620502948761) {
                              if (input[0] <= 23.043170928955078) {
                                  var168 = [0.25, 0.0, 0.75];
                              } else {
                                  var168 = [0.8571428571428571, 0.0, 0.14285714285714285];
                              }
                          } else {
                              if (input[4] <= 91.091796875) {
                                  var168 = [0.08450704225352113, 0.0, 0.9154929577464789];
                              } else {
                                  var168 = [0.28888888888888886, 0.0, 0.7111111111111111];
                              }
                          }
                      } else {
                          var168 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[1] <= 36.0) {
                  if (input[4] <= 86.04241180419922) {
                      var168 = [0.0, 1.0, 0.0];
                  } else {
                      var168 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[0] <= 9.64236831665039) {
                      if (input[4] <= 84.7857894897461) {
                          var168 = [0.0, 1.0, 0.0];
                      } else {
                          var168 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[2] <= 3.887831449508667) {
                          var168 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[4] <= 83.03875732421875) {
                              var168 = [0.0, 1.0, 0.0];
                          } else {
                              var168 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              }
          }
      } else {
          if (input[4] <= 90.14999771118164) {
              if (input[0] <= 14.397775173187256) {
                  if (input[0] <= 12.697193145751953) {
                      if (input[5] <= 26.550000190734863) {
                          if (input[5] <= 6.772563457489014) {
                              if (input[4] <= 82.60695266723633) {
                                  var168 = [0.0, 1.0, 0.0];
                              } else {
                                  var168 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[5] <= 15.023857116699219) {
                                  var168 = [0.0, 1.0, 0.0];
                              } else {
                                  var168 = [0.04347826086956522, 0.9130434782608696, 0.04347826086956522];
                              }
                          }
                      } else {
                          if (input[1] <= 41.0) {
                              if (input[1] <= 33.0) {
                                  var168 = [0.0, 1.0, 0.0];
                              } else {
                                  var168 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var168 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[1] <= 59.0) {
                          if (input[4] <= 88.0) {
                              var168 = [0.0, 1.0, 0.0];
                          } else {
                              var168 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var168 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  if (input[1] <= 24.5) {
                      var168 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[4] <= 83.92634963989258) {
                          var168 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[1] <= 61.5) {
                              var168 = [0.0, 0.0, 1.0];
                          } else {
                              var168 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          } else {
              if (input[2] <= 6.160922050476074) {
                  if (input[4] <= 91.04999923706055) {
                      if (input[5] <= 104.06520080566406) {
                          if (input[1] <= 43.0) {
                              if (input[5] <= 26.834670066833496) {
                                  var168 = [1.0, 0.0, 0.0];
                              } else {
                                  var168 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var168 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var168 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[1] <= 43.5) {
                          var168 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[5] <= 122.20000457763672) {
                              if (input[0] <= 19.318185806274414) {
                                  var168 = [0.625, 0.0, 0.375];
                              } else {
                                  var168 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var168 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  var168 = [1.0, 0.0, 0.0];
              }
          }
      }
  } else {
      if (input[0] <= 7.472648859024048) {
          if (input[2] <= 4.2552711963653564) {
              var168 = [0.0, 1.0, 0.0];
          } else {
              if (input[1] <= 72.5) {
                  var168 = [0.0, 0.0, 1.0];
              } else {
                  var168 = [0.0, 1.0, 0.0];
              }
          }
      } else {
          if (input[1] <= 71.5) {
              if (input[5] <= 79.17344284057617) {
                  var168 = [0.0, 1.0, 0.0];
              } else {
                  var168 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[4] <= 77.12267684936523) {
                  var168 = [0.0, 1.0, 0.0];
              } else {
                  if (input[5] <= 30.649999618530273) {
                      var168 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[4] <= 88.45000076293945) {
                          var168 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[0] <= 12.450460433959961) {
                              var168 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[5] <= 155.69651794433594) {
                                  var168 = [0.3333333333333333, 0.0, 0.6666666666666666];
                              } else {
                                  var168 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              }
          }
      }
  }
  var32 = addVec(var33, var168);
  let var169: HazardVector = [0, 0, 0];
  if (input[4] <= 84.72171020507812) {
      if (input[2] <= 7.1810219287872314) {
          if (input[4] <= 84.67908096313477) {
              if (input[1] <= 73.5) {
                  if (input[1] <= 35.5) {
                      if (input[2] <= 3.363641858100891) {
                          if (input[2] <= 2.9012653827667236) {
                              var169 = [0.0, 1.0, 0.0];
                          } else {
                              var169 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var169 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      var169 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[1] <= 75.5) {
                      if (input[5] <= 3.4973666667938232) {
                          var169 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[4] <= 82.596923828125) {
                              if (input[2] <= 3.893599510192871) {
                                  var169 = [0.0, 0.0, 1.0];
                              } else {
                                  var169 = [0.0, 1.0, 0.0];
                              }
                          } else {
                              var169 = [0.0, 1.0, 0.0];
                          }
                      }
                  } else {
                      var169 = [0.0, 1.0, 0.0];
                  }
              }
          } else {
              if (input[0] <= 3.945391535758972) {
                  var169 = [0.0, 0.0, 1.0];
              } else {
                  var169 = [0.0, 1.0, 0.0];
              }
          }
      } else {
          if (input[4] <= 83.42297744750977) {
              var169 = [0.0, 1.0, 0.0];
          } else {
              var169 = [0.0, 0.0, 1.0];
          }
      }
  } else {
      if (input[2] <= 3.978654384613037) {
          if (input[0] <= 23.667651176452637) {
              if (input[1] <= 37.5) {
                  if (input[5] <= 129.8000030517578) {
                      if (input[5] <= 45.10000038146973) {
                          var169 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 81.6500015258789) {
                              var169 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[4] <= 91.89999771118164) {
                                  var169 = [0.0, 0.0, 1.0];
                              } else {
                                  var169 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      var169 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[0] <= 22.15000057220459) {
                      if (input[0] <= 22.07285785675049) {
                          if (input[5] <= 40.22723197937012) {
                              var169 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[4] <= 91.95000076293945) {
                                  var169 = [0.12056737588652482, 0.0, 0.8794326241134752];
                              } else {
                                  var169 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          var169 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var169 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[5] <= 247.10000610351562) {
                  if (input[1] <= 42.0) {
                      var169 = [1.0, 0.0, 0.0];
                  } else {
                      var169 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var169 = [0.0, 0.0, 1.0];
              }
          }
      } else {
          if (input[4] <= 88.3499984741211) {
              if (input[2] <= 8.25) {
                  if (input[1] <= 48.5) {
                      if (input[1] <= 44.5) {
                          var169 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 23.949999809265137) {
                              if (input[2] <= 6.809627056121826) {
                                  var169 = [0.5, 0.5, 0.0];
                              } else {
                                  var169 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var169 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[4] <= 85.38359832763672) {
                          var169 = [0.0, 0.0, 1.0];
                      } else {
                          var169 = [0.0, 1.0, 0.0];
                      }
                  }
              } else {
                  var169 = [0.0, 1.0, 0.0];
              }
          } else {
              if (input[4] <= 90.99335479736328) {
                  if (input[0] <= 16.850000381469727) {
                      if (input[5] <= 81.9000015258789) {
                          if (input[0] <= 10.950000286102295) {
                              if (input[0] <= 9.650000095367432) {
                                  var169 = [1.0, 0.0, 0.0];
                              } else {
                                  var169 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var169 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[2] <= 5.247133255004883) {
                              if (input[2] <= 4.20613956451416) {
                                  var169 = [1.0, 0.0, 0.0];
                              } else {
                                  var169 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var169 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[1] <= 54.0) {
                          if (input[5] <= 90.5) {
                              var169 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[1] <= 42.5) {
                                  var169 = [1.0, 0.0, 0.0];
                              } else {
                                  var169 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[5] <= 100.29999923706055) {
                              var169 = [1.0, 0.0, 0.0];
                          } else {
                              var169 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  if (input[0] <= 18.868185997009277) {
                      if (input[0] <= 18.818185806274414) {
                          if (input[4] <= 91.69386672973633) {
                              if (input[4] <= 91.54999923706055) {
                                  var169 = [0.8888888888888888, 0.0, 0.1111111111111111];
                              } else {
                                  var169 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var169 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var169 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var169 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  }
  var31 = addVec(var32, var169);
  let var170: HazardVector = [0, 0, 0];
  if (input[0] <= 10.04922342300415) {
      if (input[3] <= 0.10000000149011612) {
          if (input[4] <= 85.77579116821289) {
              if (input[0] <= 4.566897630691528) {
                  var170 = [0.0, 0.0, 1.0];
              } else {
                  if (input[2] <= 8.783466339111328) {
                      if (input[2] <= 7.7059595584869385) {
                          if (input[4] <= 84.8557014465332) {
                              if (input[4] <= 84.14999771118164) {
                                  var170 = [0.0, 1.0, 0.0];
                              } else {
                                  var170 = [0.1, 0.9, 0.0];
                              }
                          } else {
                              var170 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[4] <= 85.32582092285156) {
                              if (input[1] <= 33.5) {
                                  var170 = [0.0, 1.0, 0.0];
                              } else {
                                  var170 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var170 = [0.0, 1.0, 0.0];
                          }
                      }
                  } else {
                      var170 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[4] <= 89.25) {
                  var170 = [0.0, 0.0, 1.0];
              } else {
                  if (input[0] <= 9.349999904632568) {
                      var170 = [1.0, 0.0, 0.0];
                  } else {
                      var170 = [0.0, 0.0, 1.0];
                  }
              }
          }
      } else {
          var170 = [1.0, 0.0, 0.0];
      }
  } else {
      if (input[4] <= 84.86700820922852) {
          if (input[5] <= 4.6710498332977295) {
              if (input[2] <= 3.4667460918426514) {
                  var170 = [0.0, 0.0, 1.0];
              } else {
                  var170 = [0.0, 1.0, 0.0];
              }
          } else {
              if (input[4] <= 84.3353042602539) {
                  var170 = [0.0, 1.0, 0.0];
              } else {
                  if (input[4] <= 84.40451049804688) {
                      var170 = [0.0, 0.0, 1.0];
                  } else {
                      var170 = [0.0, 1.0, 0.0];
                  }
              }
          }
      } else {
          if (input[1] <= 30.5) {
              if (input[0] <= 23.50255012512207) {
                  if (input[4] <= 90.90689849853516) {
                      var170 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[1] <= 24.5) {
                          if (input[2] <= 3.540687680244446) {
                              if (input[4] <= 92.0593147277832) {
                                  var170 = [0.0, 0.0, 1.0];
                              } else {
                                  var170 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var170 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var170 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[5] <= 240.4000015258789) {
                      var170 = [1.0, 0.0, 0.0];
                  } else {
                      var170 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[4] <= 91.78664779663086) {
                  if (input[4] <= 88.57223129272461) {
                      if (input[0] <= 10.283077716827393) {
                          if (input[0] <= 10.150000095367432) {
                              var170 = [0.0, 0.0, 1.0];
                          } else {
                              var170 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[4] <= 86.19046020507812) {
                              if (input[4] <= 85.85000228881836) {
                                  var170 = [0.0, 0.0625, 0.9375];
                              } else {
                                  var170 = [0.0, 1.0, 0.0];
                              }
                          } else {
                              var170 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[1] <= 71.5) {
                          if (input[2] <= 3.959672212600708) {
                              if (input[4] <= 91.091796875) {
                                  var170 = [0.0625, 0.0, 0.9375];
                              } else {
                                  var170 = [0.21428571428571427, 0.0, 0.7857142857142857];
                              }
                          } else {
                              if (input[2] <= 5.247133255004883) {
                                  var170 = [0.45714285714285713, 0.0, 0.5428571428571428];
                              } else {
                                  var170 = [0.6923076923076923, 0.0, 0.3076923076923077];
                              }
                          }
                      } else {
                          if (input[4] <= 90.82926559448242) {
                              if (input[4] <= 89.16718673706055) {
                                  var170 = [0.8333333333333334, 0.0, 0.16666666666666666];
                              } else {
                                  var170 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[4] <= 90.97926712036133) {
                                  var170 = [0.0, 0.0, 1.0];
                              } else {
                                  var170 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[4] <= 91.95000076293945) {
                      if (input[4] <= 91.85000228881836) {
                          var170 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[2] <= 3.549999952316284) {
                              var170 = [0.0, 0.0, 1.0];
                          } else {
                              var170 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      var170 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  }
  var30 = addVec(var31, var170);
  let var171: HazardVector = [0, 0, 0];
  if (input[0] <= 15.096360206604004) {
      if (input[4] <= 84.6053695678711) {
          if (input[2] <= 6.9410974979400635) {
              if (input[2] <= 2.8750447034835815) {
                  if (input[4] <= 82.596923828125) {
                      if (input[2] <= 2.8612582683563232) {
                          if (input[0] <= 11.970659255981445) {
                              var171 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[4] <= 78.55374908447266) {
                                  var171 = [0.0, 1.0, 0.0];
                              } else {
                                  var171 = [0.0, 0.5, 0.5];
                              }
                          }
                      } else {
                          var171 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var171 = [0.0, 1.0, 0.0];
                  }
              } else {
                  var171 = [0.0, 1.0, 0.0];
              }
          } else {
              if (input[1] <= 38.0) {
                  var171 = [0.0, 1.0, 0.0];
              } else {
                  var171 = [0.0, 0.0, 1.0];
              }
          }
      } else {
          if (input[2] <= 8.25) {
              if (input[4] <= 88.32176971435547) {
                  if (input[5] <= 25.659140586853027) {
                      if (input[5] <= 24.58897113800049) {
                          if (input[2] <= 3.978654384613037) {
                              var171 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[2] <= 4.391021013259888) {
                                  var171 = [0.0, 1.0, 0.0];
                              } else {
                                  var171 = [0.0, 0.26666666666666666, 0.7333333333333333];
                              }
                          }
                      } else {
                          var171 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      var171 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[4] <= 91.0999984741211) {
                      if (input[2] <= 5.366742849349976) {
                          if (input[4] <= 90.35000228881836) {
                              if (input[5] <= 116.92287063598633) {
                                  var171 = [0.75, 0.0, 0.25];
                              } else {
                                  var171 = [0.3333333333333333, 0.0, 0.6666666666666666];
                              }
                          } else {
                              if (input[1] <= 44.0) {
                                  var171 = [0.2857142857142857, 0.0, 0.7142857142857143];
                              } else {
                                  var171 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[1] <= 64.5) {
                              if (input[4] <= 90.95000076293945) {
                                  var171 = [1.0, 0.0, 0.0];
                              } else {
                                  var171 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var171 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[2] <= 2.0) {
                          var171 = [0.0, 0.0, 1.0];
                      } else {
                          var171 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[2] <= 8.783466339111328) {
                  var171 = [0.0, 1.0, 0.0];
              } else {
                  if (input[2] <= 9.233466148376465) {
                      var171 = [0.0, 0.0, 1.0];
                  } else {
                      var171 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  } else {
      if (input[4] <= 91.78664779663086) {
          if (input[1] <= 66.5) {
              if (input[4] <= 83.67634963989258) {
                  var171 = [0.0, 1.0, 0.0];
              } else {
                  if (input[0] <= 24.0) {
                      if (input[5] <= 129.8000030517578) {
                          if (input[4] <= 91.09317016601562) {
                              if (input[1] <= 50.5) {
                                  var171 = [0.01904761904761905, 0.0, 0.9809523809523809];
                              } else {
                                  var171 = [0.23809523809523808, 0.0, 0.7619047619047619];
                              }
                          } else {
                              if (input[2] <= 4.358978986740112) {
                                  var171 = [0.1956521739130435, 0.0, 0.8043478260869565];
                              } else {
                                  var171 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[2] <= 3.5367971658706665) {
                              if (input[5] <= 187.70000457763672) {
                                  var171 = [0.75, 0.0, 0.25];
                              } else {
                                  var171 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var171 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[1] <= 28.5) {
                          var171 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[4] <= 90.29999923706055) {
                              if (input[0] <= 24.699999809265137) {
                                  var171 = [0.0, 0.0, 1.0];
                              } else {
                                  var171 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var171 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          } else {
              var171 = [0.0, 1.0, 0.0];
          }
      } else {
          if (input[4] <= 92.0) {
              if (input[0] <= 17.80961513519287) {
                  var171 = [0.0, 0.0, 1.0];
              } else {
                  if (input[2] <= 2.899999976158142) {
                      var171 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[5] <= 143.4000015258789) {
                          var171 = [0.0, 0.0, 1.0];
                      } else {
                          var171 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              var171 = [1.0, 0.0, 0.0];
          }
      }
  }
  var29 = addVec(var30, var171);
  let var172: HazardVector = [0, 0, 0];
  if (input[1] <= 67.5) {
      if (input[5] <= 25.65812110900879) {
          if (input[5] <= 10.436715602874756) {
              if (input[2] <= 6.027005195617676) {
                  if (input[1] <= 35.5) {
                      if (input[2] <= 3.4026224613189697) {
                          var172 = [0.0, 0.0, 1.0];
                      } else {
                          var172 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      var172 = [0.0, 1.0, 0.0];
                  }
              } else {
                  var172 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[2] <= 4.019632577896118) {
                  if (input[4] <= 78.62782287597656) {
                      var172 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[1] <= 33.0) {
                          var172 = [1.0, 0.0, 0.0];
                      } else {
                          var172 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  if (input[4] <= 88.4000015258789) {
                      var172 = [0.0, 1.0, 0.0];
                  } else {
                      var172 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[0] <= 23.84999942779541) {
              if (input[0] <= 11.150000095367432) {
                  if (input[4] <= 84.08902740478516) {
                      if (input[2] <= 6.723826169967651) {
                          var172 = [0.0, 1.0, 0.0];
                      } else {
                          var172 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var172 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[4] <= 91.69386672973633) {
                      if (input[1] <= 48.5) {
                          if (input[5] <= 129.8000030517578) {
                              if (input[2] <= 6.5) {
                                  var172 = [0.04285714285714286, 0.11428571428571428, 0.8428571428571429];
                              } else {
                                  var172 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[4] <= 91.0808334350586) {
                                  var172 = [0.0, 0.0, 1.0];
                              } else {
                                  var172 = [0.9230769230769231, 0.0, 0.07692307692307693];
                              }
                          }
                      } else {
                          if (input[4] <= 84.8499984741211) {
                              var172 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[0] <= 16.43268871307373) {
                                  var172 = [0.5454545454545454, 0.0, 0.45454545454545453];
                              } else {
                                  var172 = [0.3, 0.0, 0.7];
                              }
                          }
                      }
                  } else {
                      if (input[1] <= 43.5) {
                          var172 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[5] <= 117.70000076293945) {
                              if (input[0] <= 17.44494342803955) {
                                  var172 = [0.8333333333333334, 0.0, 0.16666666666666666];
                              } else {
                                  var172 = [0.6111111111111112, 0.0, 0.3888888888888889];
                              }
                          } else {
                              var172 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          } else {
              if (input[5] <= 79.25) {
                  if (input[4] <= 91.70000076293945) {
                      if (input[5] <= 71.0) {
                          if (input[5] <= 59.89999961853027) {
                              var172 = [0.0, 0.0, 1.0];
                          } else {
                              var172 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var172 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var172 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[5] <= 247.10000610351562) {
                      var172 = [1.0, 0.0, 0.0];
                  } else {
                      var172 = [0.0, 0.0, 1.0];
                  }
              }
          }
      }
  } else {
      if (input[5] <= 75.95000076293945) {
          if (input[3] <= 0.10000000149011612) {
              if (input[2] <= 1.86801016330719) {
                  var172 = [0.0, 0.0, 1.0];
              } else {
                  if (input[5] <= 13.091224908828735) {
                      if (input[2] <= 2.931797742843628) {
                          if (input[1] <= 73.0) {
                              var172 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[5] <= 4.207770943641663) {
                                  var172 = [0.0, 1.0, 0.0];
                              } else {
                                  var172 = [0.0, 0.6666666666666666, 0.3333333333333333];
                              }
                          }
                      } else {
                          var172 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      if (input[5] <= 36.959781646728516) {
                          if (input[4] <= 61.05095100402832) {
                              var172 = [0.0, 1.0, 0.0];
                          } else {
                              var172 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[4] <= 87.93680953979492) {
                              var172 = [0.0, 1.0, 0.0];
                          } else {
                              var172 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          } else {
              var172 = [1.0, 0.0, 0.0];
          }
      } else {
          if (input[2] <= 3.799999952316284) {
              if (input[1] <= 75.5) {
                  var172 = [1.0, 0.0, 0.0];
              } else {
                  var172 = [0.0, 0.0, 1.0];
              }
          } else {
              var172 = [1.0, 0.0, 0.0];
          }
      }
  }
  var28 = addVec(var29, var172);
  let var173: HazardVector = [0, 0, 0];
  if (input[0] <= 15.187127113342285) {
      if (input[4] <= 84.67908096313477) {
          if (input[0] <= 4.566897630691528) {
              var173 = [0.0, 0.0, 1.0];
          } else {
              if (input[5] <= 3.448723554611206) {
                  var173 = [0.0, 0.0, 1.0];
              } else {
                  if (input[5] <= 25.022860527038574) {
                      if (input[2] <= 3.1124632358551025) {
                          if (input[4] <= 84.14999771118164) {
                              var173 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[0] <= 9.699999809265137) {
                                  var173 = [1.0, 0.0, 0.0];
                              } else {
                                  var173 = [0.0, 1.0, 0.0];
                              }
                          }
                      } else {
                          var173 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      if (input[2] <= 6.505887508392334) {
                          var173 = [0.0, 1.0, 0.0];
                      } else {
                          var173 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          }
      } else {
          if (input[5] <= 144.94651794433594) {
              if (input[4] <= 89.1171875) {
                  if (input[1] <= 34.0) {
                      var173 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[1] <= 59.5) {
                          if (input[0] <= 12.697193145751953) {
                              if (input[4] <= 87.18214797973633) {
                                  var173 = [0.0, 0.0, 1.0];
                              } else {
                                  var173 = [0.1111111111111111, 0.0, 0.8888888888888888];
                              }
                          } else {
                              if (input[1] <= 44.5) {
                                  var173 = [0.0, 0.0, 1.0];
                              } else {
                                  var173 = [0.0, 0.4, 0.6];
                              }
                          }
                      } else {
                          if (input[1] <= 60.5) {
                              if (input[4] <= 86.15052795410156) {
                                  var173 = [0.0, 1.0, 0.0];
                              } else {
                                  var173 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[4] <= 86.8499984741211) {
                                  var173 = [0.0, 0.0, 1.0];
                              } else {
                                  var173 = [0.25, 0.0, 0.75];
                              }
                          }
                      }
                  }
              } else {
                  if (input[1] <= 61.5) {
                      if (input[4] <= 90.75) {
                          if (input[0] <= 12.199999809265137) {
                              var173 = [1.0, 0.0, 0.0];
                          } else {
                              var173 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var173 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[4] <= 90.75) {
                          var173 = [1.0, 0.0, 0.0];
                      } else {
                          var173 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          } else {
              if (input[4] <= 88.55000305175781) {
                  var173 = [0.0, 0.0, 1.0];
              } else {
                  var173 = [1.0, 0.0, 0.0];
              }
          }
      }
  } else {
      if (input[5] <= 69.97344207763672) {
          if (input[0] <= 20.13606834411621) {
              if (input[5] <= 48.39999961853027) {
                  if (input[5] <= 23.600000381469727) {
                      if (input[2] <= 5.6000001430511475) {
                          if (input[4] <= 78.24198150634766) {
                              var173 = [0.0, 1.0, 0.0];
                          } else {
                              var173 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var173 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[2] <= 4.277963399887085) {
                          if (input[4] <= 77.84953689575195) {
                              var173 = [0.0, 1.0, 0.0];
                          } else {
                              var173 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[4] <= 90.72937393188477) {
                              if (input[0] <= 15.469113826751709) {
                                  var173 = [0.0, 1.0, 0.0];
                              } else {
                                  var173 = [0.0, 0.07692307692307693, 0.9230769230769231];
                              }
                          } else {
                              var173 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  if (input[4] <= 81.15875244140625) {
                      var173 = [0.0, 1.0, 0.0];
                  } else {
                      var173 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[4] <= 85.67489242553711) {
                  var173 = [0.0, 1.0, 0.0];
              } else {
                  if (input[5] <= 56.220041275024414) {
                      if (input[5] <= 48.85000038146973) {
                          var173 = [1.0, 0.0, 0.0];
                      } else {
                          var173 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var173 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[2] <= 3.959672212600708) {
              if (input[0] <= 23.667651176452637) {
                  if (input[2] <= 1.8323256969451904) {
                      if (input[5] <= 102.19999694824219) {
                          var173 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 125.29999923706055) {
                              var173 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[1] <= 37.0) {
                                  var173 = [1.0, 0.0, 0.0];
                              } else {
                                  var173 = [0.14285714285714285, 0.0, 0.8571428571428571];
                              }
                          }
                      }
                  } else {
                      if (input[0] <= 15.873822212219238) {
                          var173 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[4] <= 91.75) {
                              if (input[5] <= 279.0049591064453) {
                                  var173 = [0.07563025210084033, 0.0, 0.9243697478991597];
                              } else {
                                  var173 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[4] <= 91.95000076293945) {
                                  var173 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              } else {
                                  var173 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[0] <= 24.549999237060547) {
                      if (input[5] <= 86.79999923706055) {
                          var173 = [0.0, 0.0, 1.0];
                      } else {
                          var173 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[0] <= 28.949999809265137) {
                          var173 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[2] <= 3.3499999046325684) {
                              var173 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[0] <= 29.949999809265137) {
                                  var173 = [0.0, 0.0, 1.0];
                              } else {
                                  var173 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              }
          } else {
              if (input[5] <= 116.10000228881836) {
                  if (input[2] <= 4.844913005828857) {
                      if (input[5] <= 107.32268905639648) {
                          if (input[1] <= 48.5) {
                              var173 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[0] <= 17.412710189819336) {
                                  var173 = [0.0, 0.0, 1.0];
                              } else {
                                  var173 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          var173 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[0] <= 22.40000057220459) {
                          if (input[5] <= 109.35930252075195) {
                              if (input[4] <= 89.8499984741211) {
                                  var173 = [0.5, 0.0, 0.5];
                              } else {
                                  var173 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[4] <= 91.2847900390625) {
                                  var173 = [0.0, 0.0, 1.0];
                              } else {
                                  var173 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          var173 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  var173 = [1.0, 0.0, 0.0];
              }
          }
      }
  }
  var27 = addVec(var28, var173);
  let var174: HazardVector = [0, 0, 0];
  if (input[2] <= 3.9589154720306396) {
      if (input[5] <= 8.942739486694336) {
          if (input[0] <= 6.5137856006622314) {
              var174 = [0.0, 1.0, 0.0];
          } else {
              if (input[5] <= 4.6710498332977295) {
                  var174 = [0.0, 0.0, 1.0];
              } else {
                  if (input[0] <= 6.754234790802002) {
                      var174 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[4] <= 85.6827163696289) {
                          var174 = [0.0, 1.0, 0.0];
                      } else {
                          var174 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          }
      } else {
          if (input[4] <= 92.0) {
              if (input[0] <= 15.411245822906494) {
                  if (input[2] <= 2.654821515083313) {
                      if (input[5] <= 94.09440994262695) {
                          if (input[4] <= 90.75571060180664) {
                              var174 = [0.0, 0.0, 1.0];
                          } else {
                              var174 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[2] <= 1.7155961990356445) {
                              var174 = [0.0, 0.0, 1.0];
                          } else {
                              var174 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[1] <= 39.5) {
                          if (input[5] <= 22.18600559234619) {
                              if (input[2] <= 3.158311128616333) {
                                  var174 = [0.0, 0.0, 1.0];
                              } else {
                                  var174 = [0.6666666666666666, 0.3333333333333333, 0.0];
                              }
                          } else {
                              var174 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[4] <= 84.76591491699219) {
                              var174 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[1] <= 65.0) {
                                  var174 = [0.0, 0.0, 1.0];
                              } else {
                                  var174 = [0.5, 0.0, 0.5];
                              }
                          }
                      }
                  }
              } else {
                  if (input[0] <= 24.2997465133667) {
                      if (input[5] <= 129.8000030517578) {
                          if (input[4] <= 82.05581665039062) {
                              var174 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[5] <= 104.31684494018555) {
                                  var174 = [0.1044776119402985, 0.0, 0.8955223880597015];
                              } else {
                                  var174 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[2] <= 2.0) {
                              var174 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[1] <= 34.5) {
                                  var174 = [1.0, 0.0, 0.0];
                              } else {
                                  var174 = [0.15, 0.0, 0.85];
                              }
                          }
                      }
                  } else {
                      if (input[4] <= 89.5) {
                          if (input[5] <= 66.2592601776123) {
                              var174 = [0.0, 1.0, 0.0];
                          } else {
                              var174 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[1] <= 41.0) {
                              var174 = [1.0, 0.0, 0.0];
                          } else {
                              var174 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              }
          } else {
              var174 = [1.0, 0.0, 0.0];
          }
      }
  } else {
      if (input[2] <= 4.003340005874634) {
          if (input[4] <= 90.89999771118164) {
              if (input[4] <= 84.79999923706055) {
                  var174 = [0.0, 1.0, 0.0];
              } else {
                  var174 = [0.0, 0.0, 1.0];
              }
          } else {
              var174 = [1.0, 0.0, 0.0];
          }
      } else {
          if (input[5] <= 68.55049133300781) {
              if (input[5] <= 26.542137145996094) {
                  if (input[5] <= 5.570770025253296) {
                      if (input[0] <= 10.185899257659912) {
                          if (input[1] <= 65.0) {
                              var174 = [0.0, 0.0, 1.0];
                          } else {
                              var174 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          var174 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      if (input[5] <= 14.930042266845703) {
                          var174 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[4] <= 86.54999923706055) {
                              if (input[1] <= 65.5) {
                                  var174 = [0.0, 1.0, 0.0];
                              } else {
                                  var174 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[5] <= 22.300000190734863) {
                                  var174 = [1.0, 0.0, 0.0];
                              } else {
                                  var174 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[5] <= 52.88804244995117) {
                      if (input[4] <= 89.15453720092773) {
                          if (input[5] <= 34.12308692932129) {
                              if (input[4] <= 83.9750747680664) {
                                  var174 = [0.0, 1.0, 0.0];
                              } else {
                                  var174 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[5] <= 51.452219009399414) {
                                  var174 = [0.0, 1.0, 0.0];
                              } else {
                                  var174 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[5] <= 43.10000038146973) {
                              if (input[4] <= 91.14999771118164) {
                                  var174 = [0.0, 0.0, 1.0];
                              } else {
                                  var174 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var174 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      var174 = [0.0, 1.0, 0.0];
                  }
              }
          } else {
              if (input[1] <= 43.5) {
                  if (input[4] <= 90.83478927612305) {
                      if (input[4] <= 90.33478927612305) {
                          var174 = [1.0, 0.0, 0.0];
                      } else {
                          var174 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var174 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[5] <= 129.8000030517578) {
                      if (input[1] <= 69.0) {
                          if (input[5] <= 103.04999923706055) {
                              if (input[2] <= 4.700000047683716) {
                                  var174 = [0.2, 0.0, 0.8];
                              } else {
                                  var174 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[0] <= 20.018186569213867) {
                                  var174 = [0.0, 0.0, 1.0];
                              } else {
                                  var174 = [0.25, 0.0, 0.75];
                              }
                          }
                      } else {
                          var174 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var174 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  }
  var26 = addVec(var27, var174);
  let var175: HazardVector = [0, 0, 0];
  if (input[2] <= 3.832715630531311) {
      if (input[4] <= 84.14999771118164) {
          if (input[2] <= 1.8086410164833069) {
              if (input[0] <= 13.049999713897705) {
                  var175 = [0.0, 1.0, 0.0];
              } else {
                  var175 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[0] <= 11.298969268798828) {
                  var175 = [0.0, 1.0, 0.0];
              } else {
                  if (input[4] <= 82.27591705322266) {
                      var175 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[4] <= 82.93568420410156) {
                          var175 = [0.0, 0.0, 1.0];
                      } else {
                          var175 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          }
      } else {
          if (input[5] <= 129.8000030517578) {
              if (input[4] <= 92.0) {
                  if (input[5] <= 8.5706787109375) {
                      if (input[2] <= 3.2274681329727173) {
                          var175 = [1.0, 0.0, 0.0];
                      } else {
                          var175 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      if (input[2] <= 1.8323256969451904) {
                          if (input[2] <= 1.7165713906288147) {
                              if (input[5] <= 103.19393920898438) {
                                  var175 = [0.0, 0.0, 1.0];
                              } else {
                                  var175 = [0.5, 0.0, 0.5];
                              }
                          } else {
                              if (input[5] <= 93.20000076293945) {
                                  var175 = [0.0, 0.0, 1.0];
                              } else {
                                  var175 = [0.7272727272727273, 0.0, 0.2727272727272727];
                              }
                          }
                      } else {
                          if (input[4] <= 91.091796875) {
                              if (input[0] <= 24.549999237060547) {
                                  var175 = [0.02654867256637168, 0.0, 0.9734513274336283];
                              } else {
                                  var175 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[0] <= 18.275639533996582) {
                                  var175 = [0.05, 0.0, 0.95];
                              } else {
                                  var175 = [0.391304347826087, 0.0, 0.6086956521739131];
                              }
                          }
                      }
                  }
              } else {
                  var175 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[0] <= 21.056015014648438) {
                  if (input[4] <= 91.79999923706055) {
                      if (input[5] <= 187.70000457763672) {
                          if (input[5] <= 130.24197387695312) {
                              var175 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[0] <= 11.849999904632568) {
                                  var175 = [1.0, 0.0, 0.0];
                              } else {
                                  var175 = [0.375, 0.0, 0.625];
                              }
                          }
                      } else {
                          if (input[5] <= 279.0049591064453) {
                              if (input[1] <= 68.0) {
                                  var175 = [0.0, 0.0, 1.0];
                              } else {
                                  var175 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var175 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      var175 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[5] <= 247.10000610351562) {
                      var175 = [1.0, 0.0, 0.0];
                  } else {
                      var175 = [0.0, 0.0, 1.0];
                  }
              }
          }
      }
  } else {
      if (input[1] <= 43.5) {
          if (input[4] <= 85.61261749267578) {
              if (input[5] <= 28.564743041992188) {
                  var175 = [0.0, 1.0, 0.0];
              } else {
                  if (input[1] <= 30.5) {
                      var175 = [0.0, 1.0, 0.0];
                  } else {
                      var175 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[4] <= 90.79999923706055) {
                  if (input[2] <= 5.736835479736328) {
                      var175 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[4] <= 88.70000076293945) {
                          var175 = [0.0, 0.0, 1.0];
                      } else {
                          var175 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  var175 = [1.0, 0.0, 0.0];
              }
          }
      } else {
          if (input[5] <= 79.52087020874023) {
              if (input[2] <= 6.7616868019104) {
                  if (input[5] <= 9.300000190734863) {
                      var175 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[1] <= 49.0) {
                          if (input[4] <= 84.87357711791992) {
                              var175 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[2] <= 4.032249927520752) {
                                  var175 = [1.0, 0.0, 0.0];
                              } else {
                                  var175 = [0.047619047619047616, 0.0, 0.9523809523809523];
                              }
                          }
                      } else {
                          if (input[0] <= 11.41990613937378) {
                              if (input[1] <= 66.5) {
                                  var175 = [0.1, 0.85, 0.05];
                              } else {
                                  var175 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[2] <= 4.195706129074097) {
                                  var175 = [1.0, 0.0, 0.0];
                              } else {
                                  var175 = [0.05714285714285714, 0.9428571428571428, 0.0];
                              }
                          }
                      }
                  }
              } else {
                  var175 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[5] <= 138.17286682128906) {
                  if (input[5] <= 110.82268905639648) {
                      if (input[0] <= 16.850000381469727) {
                          var175 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[4] <= 90.13590621948242) {
                              var175 = [0.0, 0.0, 1.0];
                          } else {
                              var175 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[4] <= 91.38941955566406) {
                          var175 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[1] <= 49.5) {
                              var175 = [0.0, 0.0, 1.0];
                          } else {
                              var175 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  var175 = [1.0, 0.0, 0.0];
              }
          }
      }
  }
  var25 = addVec(var26, var175);
  let var176: HazardVector = [0, 0, 0];
  if (input[0] <= 14.392040729522705) {
      if (input[5] <= 9.70737600326538) {
          if (input[4] <= 84.6620979309082) {
              if (input[2] <= 1.86801016330719) {
                  if (input[1] <= 71.0) {
                      var176 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[5] <= 2.082325041294098) {
                          var176 = [0.0, 1.0, 0.0];
                      } else {
                          var176 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  if (input[2] <= 3.117082357406616) {
                      if (input[5] <= 6.776819944381714) {
                          var176 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[4] <= 84.06584930419922) {
                              var176 = [0.0, 1.0, 0.0];
                          } else {
                              var176 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      var176 = [0.0, 1.0, 0.0];
                  }
              }
          } else {
              if (input[2] <= 4.716030120849609) {
                  var176 = [0.0, 1.0, 0.0];
              } else {
                  var176 = [0.0, 0.0, 1.0];
              }
          }
      } else {
          if (input[1] <= 28.5) {
              if (input[0] <= 12.91931676864624) {
                  var176 = [0.0, 1.0, 0.0];
              } else {
                  var176 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[5] <= 93.20000076293945) {
                  if (input[1] <= 58.0) {
                      if (input[1] <= 36.5) {
                          if (input[5] <= 37.75) {
                              if (input[5] <= 14.773857116699219) {
                                  var176 = [1.0, 0.0, 0.0];
                              } else {
                                  var176 = [0.3333333333333333, 0.6666666666666666, 0.0];
                              }
                          } else {
                              if (input[5] <= 45.78421592712402) {
                                  var176 = [0.0, 0.0, 1.0];
                              } else {
                                  var176 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[5] <= 20.602240562438965) {
                              if (input[4] <= 85.67388153076172) {
                                  var176 = [0.0, 1.0, 0.0];
                              } else {
                                  var176 = [0.09523809523809523, 0.09523809523809523, 0.8095238095238095];
                              }
                          } else {
                              if (input[2] <= 1.3499999642372131) {
                                  var176 = [1.0, 0.0, 0.0];
                              } else {
                                  var176 = [0.07142857142857142, 0.0, 0.9285714285714286];
                              }
                          }
                      }
                  } else {
                      if (input[0] <= 4.830510377883911) {
                          var176 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[1] <= 92.0) {
                              if (input[2] <= 7.150000095367432) {
                                  var176 = [0.0, 0.9024390243902439, 0.0975609756097561];
                              } else {
                                  var176 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[3] <= 0.10000000149011612) {
                                  var176 = [0.0, 0.0, 1.0];
                              } else {
                                  var176 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[4] <= 91.0999984741211) {
                      if (input[0] <= 11.400460720062256) {
                          var176 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[1] <= 56.0) {
                              var176 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[5] <= 213.29999542236328) {
                                  var176 = [0.0, 0.0, 1.0];
                              } else {
                                  var176 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      if (input[2] <= 2.0) {
                          var176 = [0.0, 0.0, 1.0];
                      } else {
                          var176 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      }
  } else {
      if (input[4] <= 91.77841186523438) {
          if (input[4] <= 84.24527740478516) {
              var176 = [0.0, 1.0, 0.0];
          } else {
              if (input[4] <= 90.99648666381836) {
                  if (input[0] <= 14.432412147521973) {
                      var176 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[1] <= 52.0) {
                          if (input[1] <= 31.5) {
                              if (input[2] <= 8.049999952316284) {
                                  var176 = [0.037037037037037035, 0.0, 0.9629629629629629];
                              } else {
                                  var176 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var176 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[4] <= 88.89999771118164) {
                              var176 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[1] <= 60.5) {
                                  var176 = [0.4375, 0.0, 0.5625];
                              } else {
                                  var176 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[1] <= 39.5) {
                      if (input[4] <= 91.09317016601562) {
                          if (input[5] <= 57.28992938995361) {
                              var176 = [1.0, 0.0, 0.0];
                          } else {
                              var176 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[0] <= 19.967809677124023) {
                              var176 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[0] <= 20.40000057220459) {
                                  var176 = [0.0, 0.0, 1.0];
                              } else {
                                  var176 = [0.9, 0.0, 0.1];
                              }
                          }
                      }
                  } else {
                      if (input[1] <= 59.5) {
                          if (input[5] <= 97.25) {
                              if (input[4] <= 91.29999923706055) {
                                  var176 = [1.0, 0.0, 0.0];
                              } else {
                                  var176 = [0.3333333333333333, 0.0, 0.6666666666666666];
                              }
                          } else {
                              if (input[0] <= 20.680663108825684) {
                                  var176 = [0.08888888888888889, 0.0, 0.9111111111111111];
                              } else {
                                  var176 = [0.8, 0.0, 0.2];
                              }
                          }
                      } else {
                          var176 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      } else {
          if (input[5] <= 114.79999923706055) {
              if (input[5] <= 111.42449569702148) {
                  var176 = [1.0, 0.0, 0.0];
              } else {
                  var176 = [0.0, 0.0, 1.0];
              }
          } else {
              var176 = [1.0, 0.0, 0.0];
          }
      }
  }
  var24 = addVec(var25, var176);
  let var177: HazardVector = [0, 0, 0];
  if (input[2] <= 3.9589154720306396) {
      if (input[4] <= 84.6829833984375) {
          if (input[1] <= 73.5) {
              if (input[4] <= 84.39938735961914) {
                  var177 = [0.0, 1.0, 0.0];
              } else {
                  if (input[5] <= 40.77067947387695) {
                      var177 = [0.0, 1.0, 0.0];
                  } else {
                      var177 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[5] <= 3.382325053215027) {
                  if (input[2] <= 2.3134257197380066) {
                      var177 = [0.0, 0.0, 1.0];
                  } else {
                      var177 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[4] <= 83.47748184204102) {
                      if (input[0] <= 11.778302192687988) {
                          var177 = [0.0, 1.0, 0.0];
                      } else {
                          var177 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var177 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[5] <= 129.8000030517578) {
              if (input[1] <= 30.5) {
                  if (input[1] <= 26.0) {
                      if (input[0] <= 24.35254955291748) {
                          if (input[4] <= 91.85931396484375) {
                              var177 = [0.0, 0.0, 1.0];
                          } else {
                              var177 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var177 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[0] <= 13.24093770980835) {
                          var177 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[4] <= 90.9268913269043) {
                              if (input[4] <= 90.32688903808594) {
                                  var177 = [1.0, 0.0, 0.0];
                              } else {
                                  var177 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var177 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  if (input[5] <= 91.2944107055664) {
                      if (input[4] <= 91.60000228881836) {
                          if (input[0] <= 13.347566604614258) {
                              if (input[5] <= 31.820168495178223) {
                                  var177 = [0.0, 0.0, 1.0];
                              } else {
                                  var177 = [0.4, 0.0, 0.6];
                              }
                          } else {
                              var177 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var177 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[4] <= 92.0) {
                          if (input[5] <= 98.25) {
                              var177 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[1] <= 52.0) {
                                  var177 = [0.02631578947368421, 0.0, 0.9736842105263158];
                              } else {
                                  var177 = [0.2727272727272727, 0.0, 0.7272727272727273];
                              }
                          }
                      } else {
                          var177 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[1] <= 44.0) {
                  if (input[4] <= 91.0808334350586) {
                      if (input[4] <= 90.91413116455078) {
                          var177 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[2] <= 2.9462528228759766) {
                              var177 = [0.0, 0.0, 1.0];
                          } else {
                              var177 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[4] <= 91.70000076293945) {
                          if (input[0] <= 19.09999942779541) {
                              if (input[0] <= 17.84999942779541) {
                                  var177 = [1.0, 0.0, 0.0];
                              } else {
                                  var177 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var177 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var177 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[4] <= 91.8499984741211) {
                      if (input[2] <= 2.811040163040161) {
                          if (input[0] <= 15.200000286102295) {
                              var177 = [1.0, 0.0, 0.0];
                          } else {
                              var177 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var177 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var177 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  } else {
      if (input[5] <= 68.55049133300781) {
          if (input[4] <= 86.10000228881836) {
              if (input[0] <= 4.580510377883911) {
                  var177 = [0.0, 0.0, 1.0];
              } else {
                  if (input[2] <= 8.783466339111328) {
                      if (input[1] <= 90.5) {
                          if (input[4] <= 84.59578704833984) {
                              if (input[1] <= 60.5) {
                                  var177 = [0.0, 1.0, 0.0];
                              } else {
                                  var177 = [0.0, 0.9767441860465116, 0.023255813953488372];
                              }
                          } else {
                              if (input[4] <= 85.39124298095703) {
                                  var177 = [0.0, 0.4117647058823529, 0.5882352941176471];
                              } else {
                                  var177 = [0.0, 0.9130434782608695, 0.08695652173913043];
                              }
                          }
                      } else {
                          var177 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var177 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[2] <= 5.369261980056763) {
                  if (input[4] <= 91.14999771118164) {
                      var177 = [0.0, 0.0, 1.0];
                  } else {
                      var177 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[0] <= 15.342374324798584) {
                      if (input[2] <= 6.050000190734863) {
                          if (input[4] <= 90.5) {
                              if (input[5] <= 27.40000057220459) {
                                  var177 = [1.0, 0.0, 0.0];
                              } else {
                                  var177 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var177 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var177 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[4] <= 89.67834854125977) {
                          var177 = [0.0, 0.0, 1.0];
                      } else {
                          var177 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      } else {
          if (input[5] <= 129.8000030517578) {
              if (input[4] <= 91.89999771118164) {
                  if (input[0] <= 19.98665142059326) {
                      if (input[5] <= 82.5) {
                          var177 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[1] <= 54.5) {
                              var177 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[1] <= 57.5) {
                                  var177 = [1.0, 0.0, 0.0];
                              } else {
                                  var177 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  } else {
                      if (input[5] <= 82.76355361938477) {
                          var177 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[1] <= 56.0) {
                              var177 = [1.0, 0.0, 0.0];
                          } else {
                              var177 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  var177 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[1] <= 65.5) {
                  var177 = [1.0, 0.0, 0.0];
              } else {
                  if (input[5] <= 139.67286682128906) {
                      if (input[4] <= 90.76674270629883) {
                          var177 = [0.0, 0.0, 1.0];
                      } else {
                          var177 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var177 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  }
  var23 = addVec(var24, var177);
  let var178: HazardVector = [0, 0, 0];
  if (input[4] <= 85.551025390625) {
      if (input[0] <= 4.580510377883911) {
          var178 = [0.0, 0.0, 1.0];
      } else {
          if (input[5] <= 71.59341049194336) {
              if (input[5] <= 33.484540939331055) {
                  if (input[5] <= 27.122562408447266) {
                      if (input[2] <= 6.259877681732178) {
                          if (input[0] <= 9.86079740524292) {
                              if (input[4] <= 84.8557014465332) {
                                  var178 = [0.008064516129032258, 0.9919354838709677, 0.0];
                              } else {
                                  var178 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[0] <= 10.233916759490967) {
                                  var178 = [0.0, 0.0, 1.0];
                              } else {
                                  var178 = [0.0, 0.9753086419753086, 0.024691358024691357];
                              }
                          }
                      } else {
                          if (input[1] <= 38.5) {
                              var178 = [0.0, 1.0, 0.0];
                          } else {
                              var178 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[2] <= 4.053834915161133) {
                          var178 = [0.0, 1.0, 0.0];
                      } else {
                          var178 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  var178 = [0.0, 1.0, 0.0];
              }
          } else {
              var178 = [0.0, 0.0, 1.0];
          }
      }
  } else {
      if (input[1] <= 29.5) {
          if (input[4] <= 91.25931549072266) {
              if (input[5] <= 20.15000057220459) {
                  var178 = [1.0, 0.0, 0.0];
              } else {
                  if (input[1] <= 28.5) {
                      if (input[2] <= 6.950000047683716) {
                          var178 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[4] <= 89.64999771118164) {
                              var178 = [0.0, 0.0, 1.0];
                          } else {
                              var178 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      var178 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              var178 = [1.0, 0.0, 0.0];
          }
      } else {
          if (input[5] <= 129.8000030517578) {
              if (input[1] <= 46.5) {
                  if (input[1] <= 42.5) {
                      if (input[5] <= 40.80000114440918) {
                          if (input[2] <= 6.248931407928467) {
                              var178 = [0.0, 0.0, 1.0];
                          } else {
                              var178 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[5] <= 124.25) {
                              if (input[0] <= 20.25) {
                                  var178 = [0.8648648648648649, 0.0, 0.13513513513513514];
                              } else {
                                  var178 = [0.28846153846153844, 0.0, 0.7115384615384616];
                              }
                          } else {
                              if (input[0] <= 22.649999618530273) {
                                  var178 = [0.0, 0.0, 1.0];
                              } else {
                                  var178 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      if (input[2] <= 1.8354220986366272) {
                          if (input[4] <= 91.66851043701172) {
                              var178 = [0.0, 0.0, 1.0];
                          } else {
                              var178 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[1] <= 44.5) {
                              if (input[4] <= 91.89999771118164) {
                                  var178 = [0.03333333333333333, 0.0, 0.9666666666666667];
                              } else {
                                  var178 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[0] <= 20.25) {
                                  var178 = [0.1111111111111111, 0.0, 0.8888888888888888];
                              } else {
                                  var178 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[0] <= 18.050000190734863) {
                      if (input[2] <= 3.401381254196167) {
                          if (input[2] <= 1.339001178741455) {
                              if (input[4] <= 90.89999771118164) {
                                  var178 = [0.0, 0.0, 1.0];
                              } else {
                                  var178 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[0] <= 14.347504615783691) {
                                  var178 = [0.2222222222222222, 0.0, 0.7777777777777778];
                              } else {
                                  var178 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[5] <= 124.54449081420898) {
                              if (input[1] <= 53.5) {
                                  var178 = [0.6, 0.1, 0.3];
                              } else {
                                  var178 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var178 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[4] <= 90.06194686889648) {
                          var178 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[0] <= 23.049999237060547) {
                              var178 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[4] <= 90.6500015258789) {
                                  var178 = [1.0, 0.0, 0.0];
                              } else {
                                  var178 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              }
          } else {
              if (input[2] <= 3.5367971658706665) {
                  if (input[4] <= 91.70000076293945) {
                      if (input[1] <= 52.0) {
                          if (input[4] <= 91.28083419799805) {
                              var178 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[2] <= 2.649999976158142) {
                                  var178 = [1.0, 0.0, 0.0];
                              } else {
                                  var178 = [0.5, 0.0, 0.5];
                              }
                          }
                      } else {
                          if (input[0] <= 13.450000286102295) {
                              var178 = [1.0, 0.0, 0.0];
                          } else {
                              var178 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      var178 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[4] <= 90.16674423217773) {
                      if (input[0] <= 14.060507774353027) {
                          var178 = [0.0, 0.0, 1.0];
                      } else {
                          var178 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var178 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  }
  var22 = addVec(var23, var178);
  let var179: HazardVector = [0, 0, 0];
  if (input[4] <= 84.67908096313477) {
      if (input[0] <= 4.8123204708099365) {
          if (input[5] <= 15.800000429153442) {
              var179 = [0.0, 1.0, 0.0];
          } else {
              var179 = [0.0, 0.0, 1.0];
          }
      } else {
          if (input[2] <= 7.796332597732544) {
              if (input[1] <= 73.5) {
                  if (input[2] <= 6.692332983016968) {
                      if (input[5] <= 70.07344436645508) {
                          var179 = [0.0, 1.0, 0.0];
                      } else {
                          var179 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[1] <= 45.0) {
                          var179 = [0.0, 1.0, 0.0];
                      } else {
                          var179 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  if (input[4] <= 82.52257919311523) {
                      var179 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[2] <= 2.8525681495666504) {
                          var179 = [0.0, 1.0, 0.0];
                      } else {
                          var179 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          } else {
              var179 = [0.0, 0.0, 1.0];
          }
      }
  } else {
      if (input[4] <= 91.95000076293945) {
          if (input[4] <= 90.99648666381836) {
              if (input[1] <= 22.5) {
                  var179 = [0.0, 1.0, 0.0];
              } else {
                  if (input[1] <= 47.5) {
                      if (input[4] <= 84.87357711791992) {
                          var179 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[0] <= 13.650000095367432) {
                              if (input[1] <= 38.5) {
                                  var179 = [0.0, 0.0, 1.0];
                              } else {
                                  var179 = [0.13793103448275862, 0.0, 0.8620689655172413];
                              }
                          } else {
                              if (input[0] <= 18.478602409362793) {
                                  var179 = [0.019230769230769232, 0.0, 0.9807692307692307];
                              } else {
                                  var179 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  } else {
                      if (input[2] <= 5.366742849349976) {
                          if (input[5] <= 275.5500030517578) {
                              if (input[0] <= 24.149999618530273) {
                                  var179 = [0.046875, 0.015625, 0.9375];
                              } else {
                                  var179 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var179 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[2] <= 5.9948625564575195) {
                              if (input[2] <= 5.6000001430511475) {
                                  var179 = [0.8888888888888888, 0.0, 0.1111111111111111];
                              } else {
                                  var179 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[1] <= 72.0) {
                                  var179 = [0.18181818181818182, 0.2727272727272727, 0.5454545454545454];
                              } else {
                                  var179 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              }
          } else {
              if (input[5] <= 97.25) {
                  if (input[2] <= 2.9124159812927246) {
                      if (input[1] <= 37.5) {
                          if (input[1] <= 36.0) {
                              var179 = [1.0, 0.0, 0.0];
                          } else {
                              var179 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var179 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var179 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[2] <= 4.348857164382935) {
                      if (input[0] <= 23.550000190734863) {
                          if (input[5] <= 214.8499984741211) {
                              if (input[5] <= 129.8000030517578) {
                                  var179 = [0.13333333333333333, 0.0, 0.8666666666666667];
                              } else {
                                  var179 = [0.7, 0.0, 0.3];
                              }
                          } else {
                              var179 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var179 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[5] <= 129.8000030517578) {
                          var179 = [0.0, 0.0, 1.0];
                      } else {
                          var179 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      } else {
          var179 = [1.0, 0.0, 0.0];
      }
  }
  var21 = addVec(var22, var179);
  let var180: HazardVector = [0, 0, 0];
  if (input[4] <= 84.72245788574219) {
      if (input[4] <= 84.16878128051758) {
          if (input[1] <= 73.5) {
              var180 = [0.0, 1.0, 0.0];
          } else {
              if (input[1] <= 74.5) {
                  if (input[0] <= 14.668398380279541) {
                      if (input[5] <= 3.529691696166992) {
                          var180 = [0.0, 0.0, 1.0];
                      } else {
                          var180 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      var180 = [0.0, 1.0, 0.0];
                  }
              } else {
                  var180 = [0.0, 1.0, 0.0];
              }
          }
      } else {
          if (input[5] <= 26.800000190734863) {
              if (input[2] <= 5.637575387954712) {
                  if (input[2] <= 3.2274681329727173) {
                      if (input[5] <= 8.833965301513672) {
                          var180 = [1.0, 0.0, 0.0];
                      } else {
                          var180 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      var180 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[1] <= 42.5) {
                      var180 = [0.0, 1.0, 0.0];
                  } else {
                      var180 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              var180 = [0.0, 0.0, 1.0];
          }
      }
  } else {
      if (input[4] <= 91.77841186523438) {
          if (input[2] <= 4.891844987869263) {
              if (input[4] <= 91.09317016601562) {
                  if (input[2] <= 1.0999999642372131) {
                      if (input[0] <= 12.800000190734863) {
                          var180 = [0.0, 0.0, 1.0];
                      } else {
                          var180 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[0] <= 24.699999809265137) {
                          if (input[1] <= 76.5) {
                              if (input[2] <= 3.5474252700805664) {
                                  var180 = [0.0, 0.0, 1.0];
                              } else {
                                  var180 = [0.05263157894736842, 0.0, 0.9473684210526315];
                              }
                          } else {
                              if (input[0] <= 11.500460624694824) {
                                  var180 = [1.0, 0.0, 0.0];
                              } else {
                                  var180 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          var180 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[2] <= 3.959672212600708) {
                      if (input[0] <= 20.600000381469727) {
                          if (input[1] <= 35.5) {
                              var180 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[4] <= 91.54999923706055) {
                                  var180 = [0.375, 0.0, 0.625];
                              } else {
                                  var180 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[1] <= 50.5) {
                              if (input[0] <= 22.5) {
                                  var180 = [1.0, 0.0, 0.0];
                              } else {
                                  var180 = [0.375, 0.0, 0.625];
                              }
                          } else {
                              var180 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[4] <= 91.72840881347656) {
                          if (input[0] <= 20.09291934967041) {
                              if (input[2] <= 4.358978986740112) {
                                  var180 = [0.0, 0.0, 1.0];
                              } else {
                                  var180 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var180 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var180 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          } else {
              if (input[4] <= 88.3499984741211) {
                  if (input[2] <= 6.229787111282349) {
                      if (input[1] <= 48.0) {
                          if (input[1] <= 45.5) {
                              if (input[2] <= 5.678316831588745) {
                                  var180 = [0.0, 0.0, 1.0];
                              } else {
                                  var180 = [0.2, 0.0, 0.8];
                              }
                          } else {
                              var180 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[0] <= 12.073516845703125) {
                              if (input[4] <= 84.8969841003418) {
                                  var180 = [0.0, 1.0, 0.0];
                              } else {
                                  var180 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var180 = [0.0, 1.0, 0.0];
                          }
                      }
                  } else {
                      if (input[5] <= 11.844343185424805) {
                          var180 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 25.550000190734863) {
                              var180 = [0.0, 1.0, 0.0];
                          } else {
                              var180 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  if (input[4] <= 90.99335479736328) {
                      if (input[0] <= 17.577251434326172) {
                          if (input[4] <= 90.94335556030273) {
                              if (input[5] <= 114.37287139892578) {
                                  var180 = [1.0, 0.0, 0.0];
                              } else {
                                  var180 = [0.8, 0.0, 0.2];
                              }
                          } else {
                              var180 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[2] <= 4.960463047027588) {
                              var180 = [1.0, 0.0, 0.0];
                          } else {
                              var180 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[1] <= 49.0) {
                          var180 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[5] <= 129.8000030517578) {
                              var180 = [0.0, 0.0, 1.0];
                          } else {
                              var180 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          }
      } else {
          if (input[5] <= 113.84444427490234) {
              if (input[4] <= 92.0) {
                  if (input[5] <= 94.79841613769531) {
                      var180 = [1.0, 0.0, 0.0];
                  } else {
                      var180 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var180 = [1.0, 0.0, 0.0];
              }
          } else {
              var180 = [1.0, 0.0, 0.0];
          }
      }
  }
  var20 = addVec(var21, var180);
  let var181: HazardVector = [0, 0, 0];
  if (input[4] <= 84.72245788574219) {
      if (input[1] <= 53.5) {
          if (input[5] <= 67.0) {
              var181 = [0.0, 1.0, 0.0];
          } else {
              var181 = [0.0, 0.0, 1.0];
          }
      } else {
          if (input[1] <= 61.5) {
              if (input[4] <= 83.1595687866211) {
                  var181 = [0.0, 1.0, 0.0];
              } else {
                  if (input[4] <= 84.42977905273438) {
                      var181 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[5] <= 25.353262901306152) {
                          var181 = [0.0, 0.0, 1.0];
                      } else {
                          var181 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[4] <= 84.1406021118164) {
                  if (input[2] <= 1.8187963366508484) {
                      if (input[5] <= 3.6069486141204834) {
                          if (input[1] <= 87.5) {
                              var181 = [0.0, 0.0, 1.0];
                          } else {
                              var181 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          var181 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      if (input[5] <= 4.551283836364746) {
                          if (input[4] <= 82.52257919311523) {
                              var181 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[0] <= 8.648969173431396) {
                                  var181 = [0.0, 1.0, 0.0];
                              } else {
                                  var181 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          var181 = [0.0, 1.0, 0.0];
                      }
                  }
              } else {
                  if (input[2] <= 3.4994174242019653) {
                      var181 = [1.0, 0.0, 0.0];
                  } else {
                      var181 = [0.0, 1.0, 0.0];
                  }
              }
          }
      }
  } else {
      if (input[4] <= 91.95000076293945) {
          if (input[2] <= 4.891844987869263) {
              if (input[5] <= 129.8000030517578) {
                  if (input[4] <= 91.09317016601562) {
                      if (input[0] <= 24.149999618530273) {
                          if (input[0] <= 14.734305381774902) {
                              if (input[4] <= 89.0999984741211) {
                                  var181 = [0.0, 0.022222222222222223, 0.9777777777777777];
                              } else {
                                  var181 = [0.3, 0.0, 0.7];
                              }
                          } else {
                              var181 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[2] <= 2.0) {
                              var181 = [0.0, 0.0, 1.0];
                          } else {
                              var181 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[1] <= 39.5) {
                          if (input[2] <= 2.9124159812927246) {
                              if (input[5] <= 71.05827522277832) {
                                  var181 = [0.0, 0.0, 1.0];
                              } else {
                                  var181 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var181 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[1] <= 52.0) {
                              if (input[5] <= 106.44047164916992) {
                                  var181 = [0.5, 0.0, 0.5];
                              } else {
                                  var181 = [0.038461538461538464, 0.0, 0.9615384615384616];
                              }
                          } else {
                              if (input[5] <= 106.29999923706055) {
                                  var181 = [1.0, 0.0, 0.0];
                              } else {
                                  var181 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[5] <= 243.29999542236328) {
                      if (input[5] <= 158.5999984741211) {
                          if (input[5] <= 142.79652404785156) {
                              if (input[0] <= 14.649999618530273) {
                                  var181 = [0.0, 0.0, 1.0];
                              } else {
                                  var181 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var181 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[2] <= 3.149999976158142) {
                              if (input[5] <= 187.70000457763672) {
                                  var181 = [1.0, 0.0, 0.0];
                              } else {
                                  var181 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var181 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[2] <= 3.799999952316284) {
                          if (input[5] <= 279.8999938964844) {
                              var181 = [0.0, 0.0, 1.0];
                          } else {
                              var181 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var181 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[0] <= 6.049999952316284) {
                  var181 = [0.0, 1.0, 0.0];
              } else {
                  if (input[4] <= 88.47683715820312) {
                      if (input[4] <= 87.26602172851562) {
                          if (input[5] <= 10.312615871429443) {
                              var181 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[5] <= 21.03427505493164) {
                                  var181 = [0.6666666666666666, 0.3333333333333333, 0.0];
                              } else {
                                  var181 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          var181 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[0] <= 19.35626983642578) {
                          if (input[5] <= 139.67286682128906) {
                              if (input[4] <= 90.14999771118164) {
                                  var181 = [0.6, 0.0, 0.4];
                              } else {
                                  var181 = [0.85, 0.0, 0.15];
                              }
                          } else {
                              var181 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[0] <= 19.73665142059326) {
                              if (input[5] <= 126.8151969909668) {
                                  var181 = [0.0, 0.0, 1.0];
                              } else {
                                  var181 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[0] <= 22.25) {
                                  var181 = [1.0, 0.0, 0.0];
                              } else {
                                  var181 = [0.5, 0.0, 0.5];
                              }
                          }
                      }
                  }
              }
          }
      } else {
          var181 = [1.0, 0.0, 0.0];
      }
  }
  var19 = addVec(var20, var181);
  let var182: HazardVector = [0, 0, 0];
  if (input[5] <= 72.0999984741211) {
      if (input[5] <= 9.400000095367432) {
          if (input[0] <= 7.3738853931427) {
              var182 = [0.0, 1.0, 0.0];
          } else {
              if (input[5] <= 5.570770025253296) {
                  if (input[0] <= 12.060739994049072) {
                      if (input[5] <= 3.8621065616607666) {
                          if (input[2] <= 7.0256547927856445) {
                              var182 = [0.0, 1.0, 0.0];
                          } else {
                              var182 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var182 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[4] <= 81.81690216064453) {
                          var182 = [0.0, 1.0, 0.0];
                      } else {
                          var182 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  if (input[2] <= 1.821363389492035) {
                      if (input[1] <= 57.0) {
                          var182 = [0.0, 1.0, 0.0];
                      } else {
                          var182 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[2] <= 3.1259902715682983) {
                          if (input[1] <= 37.5) {
                              var182 = [0.0, 0.0, 1.0];
                          } else {
                              var182 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          var182 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          }
      } else {
          if (input[1] <= 52.5) {
              if (input[2] <= 6.053759574890137) {
                  if (input[4] <= 84.87357711791992) {
                      var182 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[4] <= 91.06366348266602) {
                          if (input[0] <= 23.59742832183838) {
                              if (input[0] <= 11.627837181091309) {
                                  var182 = [0.17647058823529413, 0.0, 0.8235294117647058];
                              } else {
                                  var182 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var182 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[5] <= 36.85000038146973) {
                              var182 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[2] <= 2.899999976158142) {
                                  var182 = [0.4, 0.0, 0.6];
                              } else {
                                  var182 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[5] <= 17.36991596221924) {
                      if (input[2] <= 7.226400375366211) {
                          var182 = [0.0, 1.0, 0.0];
                      } else {
                          var182 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[0] <= 14.257104873657227) {
                          var182 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[0] <= 15.542374610900879) {
                              var182 = [0.0, 0.0, 1.0];
                          } else {
                              var182 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          } else {
              if (input[2] <= 6.6822545528411865) {
                  if (input[1] <= 93.5) {
                      if (input[4] <= 84.83186340332031) {
                          if (input[4] <= 84.64999771118164) {
                              var182 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[1] <= 57.0) {
                                  var182 = [0.0, 0.0, 1.0];
                              } else {
                                  var182 = [0.0, 0.6666666666666666, 0.3333333333333333];
                              }
                          }
                      } else {
                          if (input[0] <= 10.744107723236084) {
                              var182 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[4] <= 89.02177047729492) {
                                  var182 = [0.0, 0.0, 1.0];
                              } else {
                                  var182 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      var182 = [1.0, 0.0, 0.0];
                  }
              } else {
                  var182 = [0.0, 0.0, 1.0];
              }
          }
      }
  } else {
      if (input[4] <= 91.8976821899414) {
          if (input[5] <= 129.8000030517578) {
              if (input[2] <= 6.950000047683716) {
                  if (input[5] <= 98.25) {
                      if (input[2] <= 4.844913005828857) {
                          if (input[5] <= 96.87789154052734) {
                              if (input[0] <= 19.168685913085938) {
                                  var182 = [0.16666666666666666, 0.0, 0.8333333333333334];
                              } else {
                                  var182 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var182 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[5] <= 87.95000076293945) {
                              var182 = [0.0, 0.0, 1.0];
                          } else {
                              var182 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[4] <= 91.43941879272461) {
                          var182 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[4] <= 91.60384750366211) {
                              if (input[1] <= 33.0) {
                                  var182 = [1.0, 0.0, 0.0];
                              } else {
                                  var182 = [0.2857142857142857, 0.0, 0.7142857142857143];
                              }
                          } else {
                              var182 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  var182 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[1] <= 39.5) {
                  var182 = [1.0, 0.0, 0.0];
              } else {
                  if (input[1] <= 58.5) {
                      if (input[0] <= 22.950000762939453) {
                          if (input[4] <= 91.4671630859375) {
                              var182 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[5] <= 214.8499984741211) {
                                  var182 = [0.75, 0.0, 0.25];
                              } else {
                                  var182 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          var182 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[2] <= 3.799999952316284) {
                          if (input[4] <= 91.0999984741211) {
                              if (input[1] <= 68.0) {
                                  var182 = [0.0, 0.0, 1.0];
                              } else {
                                  var182 = [0.5, 0.0, 0.5];
                              }
                          } else {
                              var182 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var182 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      } else {
          var182 = [1.0, 0.0, 0.0];
      }
  }
  var18 = addVec(var19, var182);
  let var183: HazardVector = [0, 0, 0];
  if (input[0] <= 14.888680458068848) {
      if (input[2] <= 1.8086410164833069) {
          if (input[1] <= 51.5) {
              if (input[0] <= 12.818384647369385) {
                  var183 = [0.0, 0.0, 1.0];
              } else {
                  if (input[4] <= 90.67302703857422) {
                      var183 = [0.0, 0.0, 1.0];
                  } else {
                      var183 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[5] <= 7.599833250045776) {
                  if (input[4] <= 81.86094284057617) {
                      var183 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[4] <= 81.99983215332031) {
                          var183 = [0.0, 0.0, 1.0];
                      } else {
                          var183 = [0.0, 1.0, 0.0];
                      }
                  }
              } else {
                  var183 = [0.0, 0.0, 1.0];
              }
          }
      } else {
          if (input[0] <= 7.454452276229858) {
              if (input[4] <= 84.73189544677734) {
                  if (input[1] <= 62.0) {
                      if (input[0] <= 5.115105867385864) {
                          if (input[0] <= 5.0124993324279785) {
                              var183 = [0.0, 1.0, 0.0];
                          } else {
                              var183 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var183 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      var183 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[1] <= 36.0) {
                      var183 = [0.0, 1.0, 0.0];
                  } else {
                      var183 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[5] <= 32.67100524902344) {
                  if (input[5] <= 6.615220308303833) {
                      if (input[0] <= 10.322078227996826) {
                          var183 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[0] <= 12.195069789886475) {
                              if (input[2] <= 3.6846845149993896) {
                                  var183 = [0.0, 0.0, 1.0];
                              } else {
                                  var183 = [0.0, 1.0, 0.0];
                              }
                          } else {
                              var183 = [0.0, 1.0, 0.0];
                          }
                      }
                  } else {
                      if (input[5] <= 9.396130561828613) {
                          var183 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[2] <= 3.3499999046325684) {
                              if (input[2] <= 2.7984927892684937) {
                                  var183 = [0.0, 0.25, 0.75];
                              } else {
                                  var183 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[1] <= 66.5) {
                                  var183 = [0.13157894736842105, 0.868421052631579, 0.0];
                              } else {
                                  var183 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[5] <= 81.4000015258789) {
                      if (input[4] <= 85.24735260009766) {
                          var183 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[2] <= 4.108651876449585) {
                              if (input[3] <= 0.10000000149011612) {
                                  var183 = [0.45454545454545453, 0.0, 0.5454545454545454];
                              } else {
                                  var183 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[1] <= 53.5) {
                                  var183 = [0.0, 0.0, 1.0];
                              } else {
                                  var183 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      if (input[0] <= 12.950000286102295) {
                          var183 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[5] <= 201.95000457763672) {
                              if (input[0] <= 14.377323150634766) {
                                  var183 = [0.0, 0.0, 1.0];
                              } else {
                                  var183 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var183 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          }
      }
  } else {
      if (input[2] <= 4.891844987869263) {
          if (input[0] <= 23.596644401550293) {
              if (input[2] <= 1.3974885940551758) {
                  if (input[4] <= 91.35000228881836) {
                      var183 = [0.0, 0.0, 1.0];
                  } else {
                      var183 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[4] <= 92.0) {
                      if (input[4] <= 83.95489120483398) {
                          var183 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[2] <= 3.977606415748596) {
                              if (input[2] <= 2.6880111694335938) {
                                  var183 = [0.02702702702702703, 0.0, 0.972972972972973];
                              } else {
                                  var183 = [0.10975609756097561, 0.0, 0.8902439024390244];
                              }
                          } else {
                              if (input[2] <= 4.02163290977478) {
                                  var183 = [0.5384615384615384, 0.0, 0.46153846153846156];
                              } else {
                                  var183 = [0.11538461538461539, 0.0, 0.8846153846153846];
                              }
                          }
                      }
                  } else {
                      var183 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[0] <= 25.725348472595215) {
                  if (input[5] <= 60.69137001037598) {
                      if (input[5] <= 53.95000076293945) {
                          var183 = [0.0, 0.0, 1.0];
                      } else {
                          var183 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      if (input[2] <= 2.899999976158142) {
                          var183 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[4] <= 90.05823516845703) {
                              var183 = [0.0, 0.0, 1.0];
                          } else {
                              var183 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  if (input[2] <= 3.106247663497925) {
                      var183 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[5] <= 240.4000015258789) {
                          if (input[2] <= 3.356247663497925) {
                              var183 = [0.0, 1.0, 0.0];
                          } else {
                              var183 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var183 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          }
      } else {
          if (input[5] <= 66.74909400939941) {
              if (input[1] <= 55.0) {
                  if (input[0] <= 15.90261697769165) {
                      if (input[1] <= 26.0) {
                          var183 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[2] <= 6.950000047683716) {
                              if (input[0] <= 15.300000190734863) {
                                  var183 = [1.0, 0.0, 0.0];
                              } else {
                                  var183 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var183 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[5] <= 15.916978597640991) {
                          var183 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[5] <= 33.96798324584961) {
                              var183 = [0.0, 0.0, 1.0];
                          } else {
                              var183 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  var183 = [0.0, 1.0, 0.0];
              }
          } else {
              if (input[5] <= 113.31520080566406) {
                  if (input[0] <= 17.699999809265137) {
                      var183 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[0] <= 19.73665142059326) {
                          if (input[5] <= 104.85000228881836) {
                              var183 = [1.0, 0.0, 0.0];
                          } else {
                              var183 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[4] <= 89.69999694824219) {
                              var183 = [0.0, 0.0, 1.0];
                          } else {
                              var183 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  var183 = [1.0, 0.0, 0.0];
              }
          }
      }
  }
  var17 = addVec(var18, var183);
  let var184: HazardVector = [0, 0, 0];
  if (input[4] <= 85.58578872680664) {
      if (input[2] <= 6.692332983016968) {
          if (input[4] <= 84.6654052734375) {
              if (input[2] <= 1.8503767251968384) {
                  if (input[5] <= 3.332324981689453) {
                      if (input[2] <= 1.3499999642372131) {
                          var184 = [0.0, 1.0, 0.0];
                      } else {
                          var184 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var184 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[2] <= 3.1075130701065063) {
                      if (input[4] <= 84.12134552001953) {
                          var184 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[5] <= 40.100000858306885) {
                              var184 = [1.0, 0.0, 0.0];
                          } else {
                              var184 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      var184 = [0.0, 1.0, 0.0];
                  }
              }
          } else {
              if (input[5] <= 8.599999904632568) {
                  var184 = [0.0, 1.0, 0.0];
              } else {
                  if (input[4] <= 85.42600631713867) {
                      var184 = [0.0, 0.0, 1.0];
                  } else {
                      var184 = [0.0, 1.0, 0.0];
                  }
              }
          }
      } else {
          if (input[1] <= 38.0) {
              var184 = [0.0, 1.0, 0.0];
          } else {
              var184 = [0.0, 0.0, 1.0];
          }
      }
  } else {
      if (input[2] <= 3.978654384613037) {
          if (input[4] <= 91.75) {
              if (input[0] <= 24.0) {
                  if (input[1] <= 30.0) {
                      if (input[5] <= 118.36684799194336) {
                          if (input[4] <= 91.3093147277832) {
                              var184 = [0.0, 0.0, 1.0];
                          } else {
                              var184 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var184 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[4] <= 91.091796875) {
                          if (input[1] <= 52.5) {
                              var184 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[1] <= 53.5) {
                                  var184 = [0.75, 0.0, 0.25];
                              } else {
                                  var184 = [0.08823529411764706, 0.0, 0.9117647058823529];
                              }
                          }
                      } else {
                          if (input[5] <= 214.8499984741211) {
                              if (input[2] <= 2.7124160528182983) {
                                  var184 = [0.5, 0.0, 0.5];
                              } else {
                                  var184 = [0.16666666666666666, 0.0, 0.8333333333333334];
                              }
                          } else {
                              var184 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  if (input[5] <= 222.20000457763672) {
                      var184 = [1.0, 0.0, 0.0];
                  } else {
                      var184 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[1] <= 48.5) {
                  var184 = [1.0, 0.0, 0.0];
              } else {
                  if (input[5] <= 118.19444274902344) {
                      if (input[2] <= 3.1924444437026978) {
                          if (input[4] <= 92.02734756469727) {
                              var184 = [0.0, 0.0, 1.0];
                          } else {
                              var184 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var184 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var184 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[4] <= 90.64999771118164) {
              if (input[2] <= 6.170847654342651) {
                  if (input[0] <= 17.59999942779541) {
                      if (input[0] <= 17.25) {
                          if (input[1] <= 52.0) {
                              if (input[4] <= 89.25) {
                                  var184 = [0.06060606060606061, 0.0, 0.9393939393939394];
                              } else {
                                  var184 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              }
                          } else {
                              if (input[0] <= 16.850000381469727) {
                                  var184 = [0.8181818181818182, 0.0, 0.18181818181818182];
                              } else {
                                  var184 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          var184 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var184 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[0] <= 15.349999904632568) {
                      var184 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[1] <= 34.5) {
                          var184 = [0.0, 0.0, 1.0];
                      } else {
                          var184 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[0] <= 18.868185997009277) {
                  if (input[2] <= 4.358978986740112) {
                      if (input[0] <= 17.266733169555664) {
                          var184 = [1.0, 0.0, 0.0];
                      } else {
                          var184 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[5] <= 108.35000228881836) {
                          var184 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[5] <= 129.8000030517578) {
                              var184 = [0.0, 0.0, 1.0];
                          } else {
                              var184 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  var184 = [1.0, 0.0, 0.0];
              }
          }
      }
  }
  var16 = addVec(var17, var184);
  let var185: HazardVector = [0, 0, 0];
  if (input[5] <= 72.0999984741211) {
      if (input[0] <= 7.454452276229858) {
          if (input[5] <= 27.01805877685547) {
              if (input[2] <= 4.402753591537476) {
                  var185 = [0.0, 1.0, 0.0];
              } else {
                  if (input[2] <= 4.535648584365845) {
                      var185 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[0] <= 3.399999976158142) {
                          var185 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[1] <= 58.5) {
                              var185 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[1] <= 59.5) {
                                  var185 = [0.0, 0.6, 0.4];
                              } else {
                                  var185 = [0.0, 1.0, 0.0];
                              }
                          }
                      }
                  }
              }
          } else {
              var185 = [0.0, 0.0, 1.0];
          }
      } else {
          if (input[4] <= 84.67908096313477) {
              if (input[1] <= 72.5) {
                  if (input[2] <= 7.8834662437438965) {
                      var185 = [0.0, 1.0, 0.0];
                  } else {
                      var185 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[4] <= 72.8423080444336) {
                      var185 = [0.0, 1.0, 0.0];
                  } else {
                      var185 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[5] <= 57.79999923706055) {
                  if (input[4] <= 90.80570983886719) {
                      if (input[2] <= 8.25) {
                          if (input[4] <= 85.92582321166992) {
                              if (input[1] <= 54.0) {
                                  var185 = [0.0, 0.2857142857142857, 0.7142857142857143];
                              } else {
                                  var185 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[4] <= 89.25) {
                                  var185 = [0.0, 0.0, 1.0];
                              } else {
                                  var185 = [0.12121212121212122, 0.0, 0.8787878787878788];
                              }
                          }
                      } else {
                          var185 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[5] <= 36.85000038146973) {
                          var185 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[1] <= 35.5) {
                              var185 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[5] <= 42.527231216430664) {
                                  var185 = [0.0, 0.0, 1.0];
                              } else {
                                  var185 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              } else {
                  var185 = [1.0, 0.0, 0.0];
              }
          }
      }
  } else {
      if (input[1] <= 43.5) {
          if (input[5] <= 129.8000030517578) {
              if (input[0] <= 20.807856559753418) {
                  if (input[4] <= 91.70000076293945) {
                      if (input[2] <= 3.849586248397827) {
                          var185 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[0] <= 19.350000381469727) {
                              var185 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[0] <= 19.899999618530273) {
                                  var185 = [0.0, 0.0, 1.0];
                              } else {
                                  var185 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      var185 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[4] <= 91.41435623168945) {
                      if (input[4] <= 91.14999771118164) {
                          var185 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[4] <= 91.20931243896484) {
                              var185 = [1.0, 0.0, 0.0];
                          } else {
                              var185 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[2] <= 2.450000047683716) {
                          if (input[1] <= 33.0) {
                              var185 = [1.0, 0.0, 0.0];
                          } else {
                              var185 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var185 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              var185 = [1.0, 0.0, 0.0];
          }
      } else {
          if (input[4] <= 92.0) {
              if (input[1] <= 71.5) {
                  if (input[0] <= 14.983121395111084) {
                      if (input[4] <= 90.54999923706055) {
                          var185 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[1] <= 58.5) {
                              var185 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[5] <= 129.8000030517578) {
                                  var185 = [0.0, 0.0, 1.0];
                              } else {
                                  var185 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      if (input[0] <= 22.699999809265137) {
                          if (input[5] <= 96.95000076293945) {
                              if (input[0] <= 17.577855110168457) {
                                  var185 = [0.375, 0.0, 0.625];
                              } else {
                                  var185 = [0.0625, 0.0, 0.9375];
                              }
                          } else {
                              if (input[0] <= 20.550000190734863) {
                                  var185 = [0.0, 0.0, 1.0];
                              } else {
                                  var185 = [0.2857142857142857, 0.0, 0.7142857142857143];
                              }
                          }
                      } else {
                          if (input[1] <= 48.5) {
                              var185 = [1.0, 0.0, 0.0];
                          } else {
                              var185 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  if (input[2] <= 3.799999952316284) {
                      var185 = [0.0, 0.0, 1.0];
                  } else {
                      var185 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              var185 = [1.0, 0.0, 0.0];
          }
      }
  }
  var15 = addVec(var16, var185);
  let var186: HazardVector = [0, 0, 0];
  if (input[4] <= 86.02579116821289) {
      if (input[4] <= 84.84973907470703) {
          if (input[4] <= 84.37632751464844) {
              if (input[2] <= 1.8503767251968384) {
                  if (input[2] <= 1.8437422513961792) {
                      var186 = [0.0, 1.0, 0.0];
                  } else {
                      var186 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[1] <= 78.5) {
                      var186 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[0] <= 8.650000095367432) {
                          if (input[1] <= 79.5) {
                              var186 = [1.0, 0.0, 0.0];
                          } else {
                              var186 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          var186 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[0] <= 19.19103479385376) {
                  if (input[2] <= 6.631026029586792) {
                      if (input[5] <= 26.550000190734863) {
                          var186 = [0.0, 1.0, 0.0];
                      } else {
                          var186 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[5] <= 23.93399143218994) {
                          if (input[2] <= 8.54933214187622) {
                              var186 = [0.0, 1.0, 0.0];
                          } else {
                              var186 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var186 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  var186 = [0.0, 0.0, 1.0];
              }
          }
      } else {
          if (input[0] <= 12.74521780014038) {
              if (input[1] <= 57.0) {
                  if (input[0] <= 4.3999998569488525) {
                      var186 = [0.0, 0.0, 1.0];
                  } else {
                      var186 = [0.0, 1.0, 0.0];
                  }
              } else {
                  var186 = [0.0, 0.0, 1.0];
              }
          } else {
              var186 = [0.0, 0.0, 1.0];
          }
      }
  } else {
      if (input[5] <= 129.8000030517578) {
          if (input[4] <= 92.0) {
              if (input[2] <= 4.844913005828857) {
                  if (input[0] <= 24.699999809265137) {
                      if (input[3] <= 0.10000000149011612) {
                          if (input[4] <= 91.09317016601562) {
                              if (input[4] <= 90.06269454956055) {
                                  var186 = [0.0, 0.0, 1.0];
                              } else {
                                  var186 = [0.05319148936170213, 0.0, 0.9468085106382979];
                              }
                          } else {
                              if (input[1] <= 45.5) {
                                  var186 = [0.2682926829268293, 0.0, 0.7317073170731707];
                              } else {
                                  var186 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              }
                          }
                      } else {
                          var186 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var186 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[4] <= 90.48479080200195) {
                      if (input[1] <= 58.0) {
                          if (input[2] <= 6.5) {
                              if (input[4] <= 89.32835006713867) {
                                  var186 = [0.25, 0.0, 0.75];
                              } else {
                                  var186 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var186 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var186 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[1] <= 58.0) {
                          var186 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[1] <= 70.5) {
                              var186 = [0.0, 0.0, 1.0];
                          } else {
                              var186 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          } else {
              var186 = [1.0, 0.0, 0.0];
          }
      } else {
          if (input[5] <= 239.75) {
              if (input[5] <= 138.75) {
                  if (input[5] <= 137.5500030517578) {
                      if (input[4] <= 91.13083267211914) {
                          var186 = [0.0, 0.0, 1.0];
                      } else {
                          var186 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var186 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var186 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[4] <= 89.85165023803711) {
                  if (input[0] <= 15.799999713897705) {
                      var186 = [1.0, 0.0, 0.0];
                  } else {
                      var186 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[1] <= 67.5) {
                      var186 = [0.0, 0.0, 1.0];
                  } else {
                      var186 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  }
  var14 = addVec(var15, var186);
  let var187: HazardVector = [0, 0, 0];
  if (input[5] <= 12.193005561828613) {
      if (input[1] <= 41.5) {
          if (input[4] <= 84.98139953613281) {
              var187 = [0.0, 1.0, 0.0];
          } else {
              var187 = [0.0, 0.0, 1.0];
          }
      } else {
          if (input[5] <= 3.381048560142517) {
              if (input[4] <= 50.30000114440918) {
                  var187 = [0.0, 1.0, 0.0];
              } else {
                  var187 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[0] <= 7.454452276229858) {
                  var187 = [0.0, 1.0, 0.0];
              } else {
                  if (input[0] <= 7.596792936325073) {
                      var187 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[5] <= 5.337660074234009) {
                          var187 = [0.0, 0.0, 1.0];
                      } else {
                          var187 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          }
      }
  } else {
      if (input[2] <= 3.978654384613037) {
          if (input[4] <= 91.9976806640625) {
              if (input[4] <= 84.37632751464844) {
                  var187 = [0.0, 1.0, 0.0];
              } else {
                  if (input[1] <= 72.5) {
                      if (input[4] <= 91.09317016601562) {
                          if (input[1] <= 40.5) {
                              if (input[0] <= 24.549999237060547) {
                                  var187 = [0.0, 0.0, 1.0];
                              } else {
                                  var187 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[0] <= 23.59742832183838) {
                                  var187 = [0.07954545454545454, 0.011363636363636364, 0.9090909090909091];
                              } else {
                                  var187 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[1] <= 39.5) {
                              if (input[4] <= 91.25931549072266) {
                                  var187 = [0.3333333333333333, 0.0, 0.6666666666666666];
                              } else {
                                  var187 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[2] <= 1.0999999642372131) {
                                  var187 = [1.0, 0.0, 0.0];
                              } else {
                                  var187 = [0.1276595744680851, 0.0, 0.8723404255319149];
                              }
                          }
                      }
                  } else {
                      if (input[4] <= 88.85000228881836) {
                          var187 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[0] <= 11.400460720062256) {
                              var187 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[0] <= 13.350460529327393) {
                                  var187 = [0.0, 0.0, 1.0];
                              } else {
                                  var187 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              }
          } else {
              var187 = [1.0, 0.0, 0.0];
          }
      } else {
          if (input[5] <= 67.50048828125) {
              if (input[0] <= 19.01327896118164) {
                  if (input[4] <= 89.79999923706055) {
                      if (input[1] <= 24.0) {
                          var187 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[4] <= 83.97518157958984) {
                              var187 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[0] <= 13.63691520690918) {
                                  var187 = [0.09302325581395349, 0.11627906976744186, 0.7906976744186046];
                              } else {
                                  var187 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  } else {
                      var187 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[4] <= 87.77634811401367) {
                      var187 = [0.0, 1.0, 0.0];
                  } else {
                      var187 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[5] <= 129.9000015258789) {
                  if (input[0] <= 14.527323246002197) {
                      if (input[5] <= 109.79753875732422) {
                          var187 = [1.0, 0.0, 0.0];
                      } else {
                          var187 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[1] <= 42.5) {
                          if (input[4] <= 90.83478927612305) {
                              if (input[5] <= 103.6593017578125) {
                                  var187 = [1.0, 0.0, 0.0];
                              } else {
                                  var187 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var187 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[5] <= 108.35000228881836) {
                              if (input[4] <= 89.9902229309082) {
                                  var187 = [0.0, 0.0, 1.0];
                              } else {
                                  var187 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var187 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  var187 = [1.0, 0.0, 0.0];
              }
          }
      }
  }
  var13 = addVec(var14, var187);
  let var188: HazardVector = [0, 0, 0];
  if (input[5] <= 25.65812110900879) {
      if (input[4] <= 86.02579116821289) {
          if (input[4] <= 84.58483505249023) {
              if (input[4] <= 81.95714950561523) {
                  if (input[4] <= 81.86094284057617) {
                      var188 = [0.0, 1.0, 0.0];
                  } else {
                      var188 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var188 = [0.0, 1.0, 0.0];
              }
          } else {
              if (input[0] <= 11.104647636413574) {
                  if (input[0] <= 4.950000047683716) {
                      if (input[1] <= 44.0) {
                          var188 = [0.0, 1.0, 0.0];
                      } else {
                          var188 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[1] <= 35.5) {
                          var188 = [0.0, 1.0, 0.0];
                      } else {
                          var188 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  var188 = [0.0, 1.0, 0.0];
              }
          }
      } else {
          if (input[0] <= 11.887921810150146) {
              if (input[4] <= 86.67578887939453) {
                  var188 = [0.0, 0.0, 1.0];
              } else {
                  var188 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[1] <= 35.5) {
                  var188 = [1.0, 0.0, 0.0];
              } else {
                  var188 = [0.0, 0.0, 1.0];
              }
          }
      }
  } else {
      if (input[4] <= 91.95000076293945) {
          if (input[2] <= 4.482717752456665) {
              if (input[0] <= 24.0) {
                  if (input[5] <= 73.55696487426758) {
                      if (input[4] <= 82.64680862426758) {
                          var188 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[5] <= 49.19999885559082) {
                              if (input[1] <= 53.0) {
                                  var188 = [0.06382978723404255, 0.0, 0.9361702127659575];
                              } else {
                                  var188 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[1] <= 53.5) {
                                  var188 = [0.0, 0.0, 1.0];
                              } else {
                                  var188 = [0.8, 0.0, 0.2];
                              }
                          }
                      }
                  } else {
                      if (input[5] <= 277.34999084472656) {
                          if (input[0] <= 14.79036808013916) {
                              if (input[0] <= 13.958593368530273) {
                                  var188 = [0.0, 0.0, 1.0];
                              } else {
                                  var188 = [0.8333333333333334, 0.0, 0.16666666666666666];
                              }
                          } else {
                              if (input[1] <= 54.0) {
                                  var188 = [0.1487603305785124, 0.0, 0.8512396694214877];
                              } else {
                                  var188 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          var188 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[4] <= 90.29999923706055) {
                      if (input[4] <= 83.0) {
                          var188 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[1] <= 32.0) {
                              if (input[2] <= 2.899999976158142) {
                                  var188 = [1.0, 0.0, 0.0];
                              } else {
                                  var188 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var188 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      var188 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[1] <= 68.0) {
                  if (input[4] <= 91.04999923706055) {
                      if (input[2] <= 6.454245567321777) {
                          if (input[1] <= 48.0) {
                              if (input[0] <= 19.98665142059326) {
                                  var188 = [0.025, 0.1, 0.875];
                              } else {
                                  var188 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[5] <= 71.59926414489746) {
                                  var188 = [0.3076923076923077, 0.6153846153846154, 0.07692307692307693];
                              } else {
                                  var188 = [0.2222222222222222, 0.0, 0.7777777777777778];
                              }
                          }
                      } else {
                          if (input[5] <= 38.94999885559082) {
                              var188 = [0.0, 0.0, 1.0];
                          } else {
                              var188 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[2] <= 5.150000095367432) {
                          var188 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[1] <= 47.0) {
                              var188 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[0] <= 17.149999618530273) {
                                  var188 = [1.0, 0.0, 0.0];
                              } else {
                                  var188 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[1] <= 72.0) {
                      var188 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[5] <= 74.81139373779297) {
                          var188 = [0.0, 1.0, 0.0];
                      } else {
                          var188 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          }
      } else {
          var188 = [1.0, 0.0, 0.0];
      }
  }
  var12 = addVec(var13, var188);
  let var189: HazardVector = [0, 0, 0];
  if (input[4] <= 85.73360061645508) {
      if (input[5] <= 3.5435441732406616) {
          if (input[5] <= 3.032325029373169) {
              var189 = [0.0, 1.0, 0.0];
          } else {
              var189 = [0.0, 0.0, 1.0];
          }
      } else {
          if (input[0] <= 4.453939437866211) {
              var189 = [0.0, 0.0, 1.0];
          } else {
              if (input[1] <= 92.0) {
                  if (input[4] <= 84.37632751464844) {
                      if (input[2] <= 7.326367139816284) {
                          var189 = [0.0, 1.0, 0.0];
                      } else {
                          var189 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[5] <= 25.951984405517578) {
                          if (input[2] <= 8.783466339111328) {
                              if (input[5] <= 6.537407398223877) {
                                  var189 = [0.0, 0.0, 1.0];
                              } else {
                                  var189 = [0.0, 0.8863636363636364, 0.11363636363636363];
                              }
                          } else {
                              var189 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[5] <= 26.800000190734863) {
                              if (input[4] <= 84.86652755737305) {
                                  var189 = [0.0, 1.0, 0.0];
                              } else {
                                  var189 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var189 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  var189 = [0.0, 0.0, 1.0];
              }
          }
      }
  } else {
      if (input[5] <= 57.13789749145508) {
          if (input[0] <= 8.949999809265137) {
              if (input[2] <= 5.475009202957153) {
                  if (input[1] <= 84.5) {
                      var189 = [0.0, 0.0, 1.0];
                  } else {
                      var189 = [1.0, 0.0, 0.0];
                  }
              } else {
                  var189 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[2] <= 4.365684270858765) {
                  if (input[5] <= 45.10000038146973) {
                      var189 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[4] <= 90.49871826171875) {
                          var189 = [0.0, 0.0, 1.0];
                      } else {
                          var189 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[0] <= 11.25) {
                      var189 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[4] <= 89.15453720092773) {
                          var189 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[2] <= 4.700000047683716) {
                              if (input[4] <= 91.14999771118164) {
                                  var189 = [0.0, 0.0, 1.0];
                              } else {
                                  var189 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[0] <= 14.150000095367432) {
                                  var189 = [0.8, 0.0, 0.2];
                              } else {
                                  var189 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              }
          }
      } else {
          if (input[0] <= 23.949999809265137) {
              if (input[2] <= 3.959672212600708) {
                  if (input[4] <= 91.95000076293945) {
                      if (input[4] <= 91.0808334350586) {
                          if (input[1] <= 65.0) {
                              if (input[1] <= 52.0) {
                                  var189 = [0.0, 0.0, 1.0];
                              } else {
                                  var189 = [0.125, 0.0, 0.875];
                              }
                          } else {
                              if (input[0] <= 13.958593368530273) {
                                  var189 = [0.0, 0.0, 1.0];
                              } else {
                                  var189 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              }
                          }
                      } else {
                          if (input[5] <= 95.75) {
                              var189 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[4] <= 91.20571517944336) {
                                  var189 = [0.75, 0.0, 0.25];
                              } else {
                                  var189 = [0.2, 0.0, 0.8];
                              }
                          }
                      }
                  } else {
                      var189 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[5] <= 79.52087020874023) {
                      var189 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[0] <= 19.73665142059326) {
                          if (input[1] <= 53.5) {
                              if (input[4] <= 90.7847900390625) {
                                  var189 = [0.0, 0.0, 1.0];
                              } else {
                                  var189 = [0.7407407407407407, 0.0, 0.25925925925925924];
                              }
                          } else {
                              if (input[0] <= 14.377323150634766) {
                                  var189 = [0.7222222222222222, 0.0, 0.2777777777777778];
                              } else {
                                  var189 = [0.96875, 0.0, 0.03125];
                              }
                          }
                      } else {
                          var189 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              var189 = [1.0, 0.0, 0.0];
          }
      }
  }
  var11 = addVec(var12, var189);
  let var190: HazardVector = [0, 0, 0];
  if (input[1] <= 66.5) {
      if (input[5] <= 66.17696571350098) {
          if (input[4] <= 85.68462371826172) {
              if (input[5] <= 3.493544101715088) {
                  if (input[2] <= 7.31476354598999) {
                      var190 = [0.0, 1.0, 0.0];
                  } else {
                      var190 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[4] <= 84.67908096313477) {
                      if (input[1] <= 53.5) {
                          var190 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[5] <= 3.9325032234191895) {
                              if (input[1] <= 56.5) {
                                  var190 = [0.0, 0.0, 1.0];
                              } else {
                                  var190 = [0.0, 1.0, 0.0];
                              }
                          } else {
                              if (input[0] <= 4.609238862991333) {
                                  var190 = [0.0, 0.0, 1.0];
                              } else {
                                  var190 = [0.0, 1.0, 0.0];
                              }
                          }
                      }
                  } else {
                      if (input[4] <= 85.30698776245117) {
                          if (input[2] <= 8.015865802764893) {
                              if (input[4] <= 84.71833419799805) {
                                  var190 = [0.0, 0.5, 0.5];
                              } else {
                                  var190 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var190 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          var190 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[2] <= 3.5474252700805664) {
                  if (input[1] <= 42.5) {
                      if (input[2] <= 1.0999999642372131) {
                          if (input[0] <= 15.650000095367432) {
                              var190 = [1.0, 0.0, 0.0];
                          } else {
                              var190 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var190 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var190 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[1] <= 47.5) {
                      if (input[1] <= 35.0) {
                          if (input[0] <= 15.342374324798584) {
                              if (input[4] <= 90.3499984741211) {
                                  var190 = [0.0, 0.0, 1.0];
                              } else {
                                  var190 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[2] <= 5.478316783905029) {
                                  var190 = [0.42857142857142855, 0.0, 0.5714285714285714];
                              } else {
                                  var190 = [0.09090909090909091, 0.0, 0.9090909090909091];
                              }
                          }
                      } else {
                          if (input[4] <= 91.31366348266602) {
                              if (input[2] <= 5.7493040561676025) {
                                  var190 = [0.0, 0.0, 1.0];
                              } else {
                                  var190 = [0.2, 0.0, 0.8];
                              }
                          } else {
                              var190 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[2] <= 5.8500001430511475) {
                          if (input[5] <= 28.448203086853027) {
                              if (input[1] <= 51.5) {
                                  var190 = [1.0, 0.0, 0.0];
                              } else {
                                  var190 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var190 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var190 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          }
      } else {
          if (input[5] <= 129.8000030517578) {
              if (input[4] <= 92.0) {
                  if (input[4] <= 91.09317016601562) {
                      if (input[4] <= 90.54024887084961) {
                          if (input[0] <= 14.818799018859863) {
                              if (input[0] <= 14.25) {
                                  var190 = [1.0, 0.0, 0.0];
                              } else {
                                  var190 = [0.5, 0.0, 0.5];
                              }
                          } else {
                              if (input[4] <= 90.43578720092773) {
                                  var190 = [0.10526315789473684, 0.0, 0.8947368421052632];
                              } else {
                                  var190 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          var190 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[4] <= 91.6170539855957) {
                          if (input[0] <= 20.498793601989746) {
                              if (input[2] <= 4.35884952545166) {
                                  var190 = [0.0, 0.0, 1.0];
                              } else {
                                  var190 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[4] <= 91.41435623168945) {
                                  var190 = [0.8666666666666667, 0.0, 0.13333333333333333];
                              } else {
                                  var190 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[1] <= 41.0) {
                              var190 = [1.0, 0.0, 0.0];
                          } else {
                              var190 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  var190 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[4] <= 91.64999771118164) {
                  if (input[5] <= 187.70000457763672) {
                      if (input[4] <= 90.91413116455078) {
                          if (input[0] <= 14.060507774353027) {
                              var190 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[2] <= 3.943114757537842) {
                                  var190 = [0.0, 0.0, 1.0];
                              } else {
                                  var190 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[4] <= 91.54999923706055) {
                              var190 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[0] <= 19.899999618530273) {
                                  var190 = [0.0, 0.0, 1.0];
                              } else {
                                  var190 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      if (input[0] <= 16.5) {
                          if (input[4] <= 90.5) {
                              var190 = [1.0, 0.0, 0.0];
                          } else {
                              var190 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var190 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  var190 = [1.0, 0.0, 0.0];
              }
          }
      }
  } else {
      if (input[5] <= 75.95000076293945) {
          if (input[4] <= 84.14999771118164) {
              if (input[4] <= 81.88681030273438) {
                  var190 = [0.0, 1.0, 0.0];
              } else {
                  if (input[0] <= 10.398969173431396) {
                      var190 = [0.0, 1.0, 0.0];
                  } else {
                      var190 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              if (input[2] <= 4.700000047683716) {
                  if (input[4] <= 89.64999771118164) {
                      if (input[4] <= 84.54999923706055) {
                          var190 = [1.0, 0.0, 0.0];
                      } else {
                          var190 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var190 = [1.0, 0.0, 0.0];
                  }
              } else {
                  var190 = [0.0, 0.0, 1.0];
              }
          }
      } else {
          if (input[4] <= 90.79999923706055) {
              var190 = [1.0, 0.0, 0.0];
          } else {
              if (input[2] <= 2.0) {
                  var190 = [0.0, 0.0, 1.0];
              } else {
                  if (input[5] <= 134.4499969482422) {
                      if (input[1] <= 68.5) {
                          var190 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[0] <= 12.400000095367432) {
                              var190 = [1.0, 0.0, 0.0];
                          } else {
                              var190 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      var190 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  }
  var10 = addVec(var11, var190);
  let var191: HazardVector = [0, 0, 0];
  if (input[0] <= 15.073886394500732) {
      if (input[4] <= 84.78081512451172) {
          if (input[5] <= 3.493544101715088) {
              if (input[4] <= 79.16497421264648) {
                  var191 = [0.0, 1.0, 0.0];
              } else {
                  var191 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[5] <= 26.550000190734863) {
                  if (input[1] <= 78.5) {
                      var191 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[4] <= 80.95994567871094) {
                          var191 = [0.0, 1.0, 0.0];
                      } else {
                          var191 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[4] <= 84.08902740478516) {
                      var191 = [0.0, 1.0, 0.0];
                  } else {
                      var191 = [0.0, 0.0, 1.0];
                  }
              }
          }
      } else {
          if (input[2] <= 6.224472761154175) {
              if (input[5] <= 144.94651794433594) {
                  if (input[5] <= 40.60000038146973) {
                      if (input[0] <= 11.450000286102295) {
                          var191 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[2] <= 5.105146169662476) {
                              var191 = [0.0, 0.0, 1.0];
                          } else {
                              var191 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[1] <= 42.0) {
                          if (input[2] <= 2.649999976158142) {
                              var191 = [0.0, 0.0, 1.0];
                          } else {
                              var191 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[5] <= 48.87799263000488) {
                              var191 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[0] <= 14.088986873626709) {
                                  var191 = [0.13333333333333333, 0.0, 0.8666666666666667];
                              } else {
                                  var191 = [0.5, 0.0, 0.5];
                              }
                          }
                      }
                  }
              } else {
                  var191 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[1] <= 64.0) {
                  if (input[2] <= 8.949999809265137) {
                      if (input[1] <= 28.0) {
                          var191 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[0] <= 10.462471961975098) {
                              if (input[4] <= 89.29999923706055) {
                                  var191 = [0.0, 0.0, 1.0];
                              } else {
                                  var191 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var191 = [0.0, 1.0, 0.0];
                          }
                      }
                  } else {
                      var191 = [1.0, 0.0, 0.0];
                  }
              } else {
                  var191 = [1.0, 0.0, 0.0];
              }
          }
      }
  } else {
      if (input[5] <= 74.35000228881836) {
          if (input[5] <= 50.36402893066406) {
              if (input[4] <= 83.3079719543457) {
                  var191 = [0.0, 1.0, 0.0];
              } else {
                  if (input[5] <= 48.39999961853027) {
                      if (input[2] <= 4.42339301109314) {
                          if (input[4] <= 91.39402389526367) {
                              var191 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[2] <= 2.899999976158142) {
                                  var191 = [0.5, 0.0, 0.5];
                              } else {
                                  var191 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[2] <= 4.997146368026733) {
                              if (input[4] <= 91.14999771118164) {
                                  var191 = [0.0, 0.0, 1.0];
                              } else {
                                  var191 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[2] <= 7.442718982696533) {
                                  var191 = [0.0, 0.0, 1.0];
                              } else {
                                  var191 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              }
                          }
                      }
                  } else {
                      var191 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[1] <= 31.5) {
                  var191 = [0.0, 0.0, 1.0];
              } else {
                  if (input[0] <= 22.876391410827637) {
                      var191 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[5] <= 61.2913703918457) {
                          if (input[0] <= 24.804701805114746) {
                              if (input[0] <= 24.133034706115723) {
                                  var191 = [0.0, 1.0, 0.0];
                              } else {
                                  var191 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var191 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          if (input[4] <= 89.29999923706055) {
                              var191 = [0.0, 0.0, 1.0];
                          } else {
                              var191 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          }
      } else {
          if (input[2] <= 3.959672212600708) {
              if (input[5] <= 129.8000030517578) {
                  if (input[0] <= 23.867650985717773) {
                      if (input[5] <= 125.29999923706055) {
                          if (input[0] <= 21.56204319000244) {
                              if (input[1] <= 39.5) {
                                  var191 = [0.9230769230769231, 0.0, 0.07692307692307693];
                              } else {
                                  var191 = [0.4027777777777778, 0.0, 0.5972222222222222];
                              }
                          } else {
                              var191 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var191 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var191 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[4] <= 91.70000076293945) {
                      if (input[2] <= 3.5287898778915405) {
                          if (input[1] <= 38.0) {
                              var191 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[0] <= 20.865222930908203) {
                                  var191 = [0.045454545454545456, 0.0, 0.9545454545454546];
                              } else {
                                  var191 = [0.5, 0.0, 0.5];
                              }
                          }
                      } else {
                          if (input[1] <= 43.0) {
                              var191 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[5] <= 279.8999938964844) {
                                  var191 = [0.0, 0.0, 1.0];
                              } else {
                                  var191 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      var191 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[4] <= 89.94022369384766) {
                  var191 = [0.0, 0.0, 1.0];
              } else {
                  if (input[2] <= 4.358978986740112) {
                      if (input[1] <= 44.5) {
                          if (input[2] <= 4.10884952545166) {
                              var191 = [1.0, 0.0, 0.0];
                          } else {
                              var191 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var191 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[0] <= 15.649999618530273) {
                          var191 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[2] <= 5.150000095367432) {
                              var191 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[4] <= 90.5999984741211) {
                                  var191 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              } else {
                                  var191 = [0.9811320754716981, 0.0, 0.018867924528301886];
                              }
                          }
                      }
                  }
              }
          }
      }
  }
  var9 = addVec(var10, var191);
  let var192: HazardVector = [0, 0, 0];
  if (input[1] <= 66.5) {
      if (input[0] <= 15.411245822906494) {
          if (input[5] <= 25.67666721343994) {
              if (input[5] <= 9.70737600326538) {
                  if (input[1] <= 61.5) {
                      if (input[5] <= 6.615220308303833) {
                          if (input[4] <= 83.56675720214844) {
                              var192 = [0.0, 1.0, 0.0];
                          } else {
                              var192 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var192 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      if (input[1] <= 63.0) {
                          if (input[0] <= 8.116303443908691) {
                              var192 = [0.0, 1.0, 0.0];
                          } else {
                              var192 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var192 = [0.0, 1.0, 0.0];
                      }
                  }
              } else {
                  if (input[0] <= 11.118828296661377) {
                      if (input[4] <= 85.67582321166992) {
                          if (input[0] <= 6.648113965988159) {
                              var192 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[5] <= 24.56085777282715) {
                                  var192 = [0.0, 1.0, 0.0];
                              } else {
                                  var192 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[4] <= 86.57582092285156) {
                              var192 = [0.0, 0.0, 1.0];
                          } else {
                              var192 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[2] <= 2.250615119934082) {
                          var192 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 10.736742496490479) {
                              if (input[1] <= 42.0) {
                                  var192 = [0.0, 0.0, 1.0];
                              } else {
                                  var192 = [0.0, 1.0, 0.0];
                              }
                          } else {
                              if (input[1] <= 49.5) {
                                  var192 = [0.10526315789473684, 0.7894736842105263, 0.10526315789473684];
                              } else {
                                  var192 = [0.0, 0.2, 0.8];
                              }
                          }
                      }
                  }
              }
          } else {
              if (input[4] <= 83.90684509277344) {
                  var192 = [0.0, 1.0, 0.0];
              } else {
                  if (input[0] <= 11.25) {
                      var192 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[2] <= 1.0999999642372131) {
                          var192 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[4] <= 91.3499984741211) {
                              if (input[1] <= 63.5) {
                                  var192 = [0.1282051282051282, 0.0, 0.8717948717948718];
                              } else {
                                  var192 = [0.5, 0.0, 0.5];
                              }
                          } else {
                              var192 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          }
      } else {
          if (input[5] <= 129.8000030517578) {
              if (input[2] <= 3.959672212600708) {
                  if (input[5] <= 66.17696571350098) {
                      if (input[5] <= 52.58213806152344) {
                          if (input[2] <= 2.9124159812927246) {
                              var192 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[5] <= 34.30000114440918) {
                                  var192 = [1.0, 0.0, 0.0];
                              } else {
                                  var192 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          var192 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      if (input[0] <= 24.2997465133667) {
                          if (input[0] <= 22.182080268859863) {
                              if (input[5] <= 125.17013549804688) {
                                  var192 = [0.35294117647058826, 0.0, 0.6470588235294118];
                              } else {
                                  var192 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[0] <= 23.949999809265137) {
                                  var192 = [0.0, 0.0, 1.0];
                              } else {
                                  var192 = [0.4, 0.0, 0.6];
                              }
                          }
                      } else {
                          if (input[1] <= 35.5) {
                              var192 = [1.0, 0.0, 0.0];
                          } else {
                              var192 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  if (input[5] <= 33.04999923706055) {
                      if (input[2] <= 5.478316783905029) {
                          if (input[2] <= 5.196726322174072) {
                              var192 = [0.0, 0.0, 1.0];
                          } else {
                              var192 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          if (input[1] <= 26.5) {
                              var192 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[2] <= 5.678316831588745) {
                                  var192 = [0.0, 0.0, 1.0];
                              } else {
                                  var192 = [0.3333333333333333, 0.0, 0.6666666666666666];
                              }
                          }
                      }
                  } else {
                      if (input[4] <= 89.89022445678711) {
                          if (input[1] <= 56.0) {
                              if (input[4] <= 84.65634536743164) {
                                  var192 = [0.0, 1.0, 0.0];
                              } else {
                                  var192 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var192 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          if (input[4] <= 91.69386672973633) {
                              if (input[5] <= 102.6500015258789) {
                                  var192 = [0.7692307692307693, 0.0, 0.23076923076923078];
                              } else {
                                  var192 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[5] <= 109.21250915527344) {
                                  var192 = [1.0, 0.0, 0.0];
                              } else {
                                  var192 = [0.9, 0.0, 0.1];
                              }
                          }
                      }
                  }
              }
          } else {
              if (input[1] <= 44.5) {
                  if (input[4] <= 90.91413116455078) {
                      var192 = [0.0, 0.0, 1.0];
                  } else {
                      var192 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[2] <= 3.799999952316284) {
                      if (input[4] <= 91.70000076293945) {
                          if (input[0] <= 16.5) {
                              if (input[1] <= 60.5) {
                                  var192 = [1.0, 0.0, 0.0];
                              } else {
                                  var192 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[0] <= 20.865222930908203) {
                                  var192 = [0.0, 0.0, 1.0];
                              } else {
                                  var192 = [0.16666666666666666, 0.0, 0.8333333333333334];
                              }
                          }
                      } else {
                          var192 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var192 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  } else {
      if (input[4] <= 84.14999771118164) {
          if (input[1] <= 73.5) {
              var192 = [0.0, 1.0, 0.0];
          } else {
              if (input[0] <= 12.788825035095215) {
                  var192 = [0.0, 1.0, 0.0];
              } else {
                  if (input[2] <= 4.156722843647003) {
                      var192 = [0.0, 0.0, 1.0];
                  } else {
                      var192 = [0.0, 1.0, 0.0];
                  }
              }
          }
      } else {
          if (input[0] <= 6.0) {
              var192 = [0.0, 0.0, 1.0];
          } else {
              if (input[4] <= 88.45000076293945) {
                  if (input[1] <= 86.5) {
                      if (input[0] <= 10.049999713897705) {
                          var192 = [1.0, 0.0, 0.0];
                      } else {
                          var192 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      var192 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[1] <= 70.5) {
                      if (input[4] <= 91.45000076293945) {
                          var192 = [0.0, 0.0, 1.0];
                      } else {
                          var192 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var192 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  }
  var8 = addVec(var9, var192);
  let var193: HazardVector = [0, 0, 0];
  if (input[4] <= 85.73360061645508) {
      if (input[4] <= 84.58776092529297) {
          if (input[0] <= 11.78834581375122) {
              if (input[0] <= 4.862499475479126) {
                  if (input[2] <= 7.400000095367432) {
                      var193 = [0.0, 1.0, 0.0];
                  } else {
                      var193 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var193 = [0.0, 1.0, 0.0];
              }
          } else {
              if (input[2] <= 1.8503767251968384) {
                  if (input[1] <= 61.0) {
                      var193 = [0.0, 1.0, 0.0];
                  } else {
                      var193 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[1] <= 72.5) {
                      if (input[4] <= 84.39938735961914) {
                          var193 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[1] <= 35.5) {
                              var193 = [0.0, 0.0, 1.0];
                          } else {
                              var193 = [0.0, 1.0, 0.0];
                          }
                      }
                  } else {
                      if (input[2] <= 4.6690285205841064) {
                          var193 = [0.0, 0.0, 1.0];
                      } else {
                          var193 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          }
      } else {
          if (input[2] <= 6.838087320327759) {
              if (input[5] <= 25.951984405517578) {
                  if (input[5] <= 25.18411350250244) {
                      if (input[2] <= 4.391021013259888) {
                          if (input[0] <= 13.403247833251953) {
                              var193 = [0.0, 0.0, 1.0];
                          } else {
                              var193 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          if (input[5] <= 18.225107192993164) {
                              var193 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[4] <= 85.22604751586914) {
                                  var193 = [0.0, 0.0, 1.0];
                              } else {
                                  var193 = [0.0, 1.0, 0.0];
                              }
                          }
                      }
                  } else {
                      var193 = [0.0, 1.0, 0.0];
                  }
              } else {
                  var193 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[1] <= 38.0) {
                  var193 = [0.0, 1.0, 0.0];
              } else {
                  var193 = [0.0, 0.0, 1.0];
              }
          }
      }
  } else {
      if (input[0] <= 23.84999942779541) {
          if (input[1] <= 63.5) {
              if (input[2] <= 4.477004528045654) {
                  if (input[2] <= 1.339001178741455) {
                      if (input[1] <= 54.5) {
                          if (input[4] <= 91.8499984741211) {
                              var193 = [0.0, 0.0, 1.0];
                          } else {
                              var193 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var193 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[4] <= 91.78664779663086) {
                          if (input[2] <= 3.977606415748596) {
                              if (input[5] <= 129.8000030517578) {
                                  var193 = [0.06818181818181818, 0.0, 0.9318181818181818];
                              } else {
                                  var193 = [0.23076923076923078, 0.0, 0.7692307692307693];
                              }
                          } else {
                              if (input[2] <= 4.032249927520752) {
                                  var193 = [0.5294117647058824, 0.0, 0.47058823529411764];
                              } else {
                                  var193 = [0.0, 0.0, 1.0];
                              }
                          }
                      } else {
                          if (input[0] <= 15.817774772644043) {
                              if (input[2] <= 2.474730610847473) {
                                  var193 = [0.0, 0.0, 1.0];
                              } else {
                                  var193 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[1] <= 44.5) {
                                  var193 = [1.0, 0.0, 0.0];
                              } else {
                                  var193 = [0.8947368421052632, 0.0, 0.10526315789473684];
                              }
                          }
                      }
                  }
              } else {
                  if (input[0] <= 14.299999713897705) {
                      if (input[4] <= 88.45000076293945) {
                          if (input[1] <= 45.5) {
                              if (input[5] <= 21.25) {
                                  var193 = [0.5, 0.0, 0.5];
                              } else {
                                  var193 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var193 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[4] <= 90.94492721557617) {
                              var193 = [1.0, 0.0, 0.0];
                          } else {
                              var193 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[1] <= 30.5) {
                          if (input[4] <= 90.79999923706055) {
                              var193 = [0.0, 0.0, 1.0];
                          } else {
                              var193 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[5] <= 85.0576286315918) {
                              if (input[4] <= 90.3499984741211) {
                                  var193 = [0.0, 0.0, 1.0];
                              } else {
                                  var193 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[5] <= 111.04999923706055) {
                                  var193 = [0.76, 0.0, 0.24];
                              } else {
                                  var193 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              }
          } else {
              if (input[5] <= 144.94651794433594) {
                  if (input[4] <= 90.06674194335938) {
                      if (input[0] <= 13.058593273162842) {
                          if (input[1] <= 72.5) {
                              var193 = [0.0, 0.0, 1.0];
                          } else {
                              var193 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var193 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[2] <= 2.0) {
                          var193 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 117.12013626098633) {
                              var193 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[1] <= 78.5) {
                                  var193 = [0.5, 0.0, 0.5];
                              } else {
                                  var193 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              } else {
                  var193 = [1.0, 0.0, 0.0];
              }
          }
      } else {
          if (input[5] <= 247.10000610351562) {
              var193 = [1.0, 0.0, 0.0];
          } else {
              var193 = [0.0, 0.0, 1.0];
          }
      }
  }
  var7 = addVec(var8, var193);
  let var194: HazardVector = [0, 0, 0];
  if (input[4] <= 84.6620979309082) {
      if (input[4] <= 84.11833572387695) {
          if (input[0] <= 12.022536754608154) {
              if (input[0] <= 11.898969173431396) {
                  if (input[5] <= 27.6114444732666) {
                      var194 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[2] <= 6.567946434020996) {
                          var194 = [0.0, 1.0, 0.0];
                      } else {
                          var194 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  var194 = [0.0, 0.0, 1.0];
              }
          } else {
              var194 = [0.0, 1.0, 0.0];
          }
      } else {
          if (input[4] <= 84.41879653930664) {
              if (input[5] <= 26.270334243774414) {
                  var194 = [0.0, 1.0, 0.0];
              } else {
                  var194 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[1] <= 49.5) {
                  var194 = [0.0, 1.0, 0.0];
              } else {
                  if (input[1] <= 56.5) {
                      var194 = [0.0, 0.0, 1.0];
                  } else {
                      var194 = [0.0, 1.0, 0.0];
                  }
              }
          }
      }
  } else {
      if (input[5] <= 129.8000030517578) {
          if (input[0] <= 6.471441268920898) {
              if (input[1] <= 36.5) {
                  var194 = [0.0, 1.0, 0.0];
              } else {
                  var194 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[2] <= 4.477004528045654) {
                  if (input[1] <= 30.0) {
                      if (input[4] <= 91.3093147277832) {
                          if (input[2] <= 2.3906877040863037) {
                              var194 = [1.0, 0.0, 0.0];
                          } else {
                              var194 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var194 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[2] <= 0.9216743409633636) {
                          if (input[1] <= 34.0) {
                              var194 = [0.0, 0.0, 1.0];
                          } else {
                              var194 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[2] <= 2.690904974937439) {
                              if (input[4] <= 91.9976806640625) {
                                  var194 = [0.025974025974025976, 0.0, 0.974025974025974];
                              } else {
                                  var194 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[4] <= 91.78664779663086) {
                                  var194 = [0.12903225806451613, 0.010752688172043012, 0.8602150537634409];
                              } else {
                                  var194 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              } else {
                  if (input[0] <= 11.400000095367432) {
                      if (input[5] <= 20.004191398620605) {
                          if (input[0] <= 8.511481761932373) {
                              var194 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[1] <= 32.5) {
                                  var194 = [0.0, 1.0, 0.0];
                              } else {
                                  var194 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          var194 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[1] <= 42.5) {
                          if (input[1] <= 30.5) {
                              if (input[5] <= 31.970905303955078) {
                                  var194 = [0.375, 0.0, 0.625];
                              } else {
                                  var194 = [0.9411764705882353, 0.0, 0.058823529411764705];
                              }
                          } else {
                              var194 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[4] <= 91.64999771118164) {
                              if (input[1] <= 46.5) {
                                  var194 = [0.0, 0.0, 1.0];
                              } else {
                                  var194 = [0.4, 0.03333333333333333, 0.5666666666666667];
                              }
                          } else {
                              if (input[4] <= 91.89999771118164) {
                                  var194 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              } else {
                                  var194 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  }
              }
          }
      } else {
          if (input[5] <= 243.29999542236328) {
              if (input[5] <= 138.75) {
                  if (input[4] <= 91.0808334350586) {
                      var194 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[1] <= 40.5) {
                          var194 = [1.0, 0.0, 0.0];
                      } else {
                          if (input[4] <= 91.75) {
                              var194 = [0.0, 0.0, 1.0];
                          } else {
                              var194 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  if (input[2] <= 3.799999952316284) {
                      if (input[0] <= 15.458593845367432) {
                          if (input[4] <= 90.2171859741211) {
                              var194 = [0.0, 0.0, 1.0];
                          } else {
                              var194 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var194 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var194 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[1] <= 57.5) {
                  var194 = [0.0, 0.0, 1.0];
              } else {
                  if (input[5] <= 262.34999084472656) {
                      var194 = [0.0, 0.0, 1.0];
                  } else {
                      var194 = [1.0, 0.0, 0.0];
                  }
              }
          }
      }
  }
  var6 = addVec(var7, var194);
  let var195: HazardVector = [0, 0, 0];
  if (input[5] <= 27.461444854736328) {
      if (input[0] <= 14.886317253112793) {
          if (input[4] <= 85.7727165222168) {
              if (input[0] <= 3.810382843017578) {
                  var195 = [0.0, 0.0, 1.0];
              } else {
                  if (input[4] <= 84.16878128051758) {
                      if (input[4] <= 81.86990356445312) {
                          var195 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[5] <= 3.382325053215027) {
                              var195 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[1] <= 73.0) {
                                  var195 = [0.0, 1.0, 0.0];
                              } else {
                                  var195 = [0.0, 0.9285714285714286, 0.07142857142857142];
                              }
                          }
                      }
                  } else {
                      if (input[1] <= 70.0) {
                          if (input[2] <= 8.783466339111328) {
                              if (input[0] <= 8.672035694122314) {
                                  var195 = [0.0, 0.76, 0.24];
                              } else {
                                  var195 = [0.0, 1.0, 0.0];
                              }
                          } else {
                              var195 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var195 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[4] <= 87.13844299316406) {
                  if (input[2] <= 5.725009202957153) {
                      var195 = [0.0, 0.0, 1.0];
                  } else {
                      var195 = [0.0, 1.0, 0.0];
                  }
              } else {
                  if (input[2] <= 3.2218981981277466) {
                      var195 = [0.0, 0.0, 1.0];
                  } else {
                      var195 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[5] <= 9.174841165542603) {
              var195 = [0.0, 1.0, 0.0];
          } else {
              if (input[4] <= 80.88982391357422) {
                  var195 = [0.0, 1.0, 0.0];
              } else {
                  if (input[1] <= 31.5) {
                      if (input[0] <= 16.999341011047363) {
                          var195 = [0.0, 0.0, 1.0];
                      } else {
                          var195 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var195 = [0.0, 0.0, 1.0];
                  }
              }
          }
      }
  } else {
      if (input[1] <= 36.5) {
          if (input[2] <= 4.42339301109314) {
              if (input[4] <= 91.3093147277832) {
                  if (input[0] <= 24.549999237060547) {
                      if (input[0] <= 12.440937519073486) {
                          if (input[5] <= 44.0) {
                              var195 = [0.0, 0.0, 1.0];
                          } else {
                              var195 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[4] <= 91.08585739135742) {
                              var195 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[2] <= 3.3499999046325684) {
                                  var195 = [0.0, 0.0, 1.0];
                              } else {
                                  var195 = [1.0, 0.0, 0.0];
                              }
                          }
                      }
                  } else {
                      if (input[5] <= 63.8592586517334) {
                          var195 = [0.0, 1.0, 0.0];
                      } else {
                          var195 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  var195 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[1] <= 30.5) {
                  if (input[4] <= 91.14999771118164) {
                      if (input[5] <= 37.87165451049805) {
                          var195 = [0.0, 0.0, 1.0];
                      } else {
                          var195 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      var195 = [1.0, 0.0, 0.0];
                  }
              } else {
                  var195 = [1.0, 0.0, 0.0];
              }
          }
      } else {
          if (input[4] <= 91.95000076293945) {
              if (input[5] <= 129.8000030517578) {
                  if (input[1] <= 61.5) {
                      if (input[0] <= 21.91548728942871) {
                          if (input[4] <= 77.79241943359375) {
                              var195 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[4] <= 88.67177200317383) {
                                  var195 = [0.0, 0.0, 1.0];
                              } else {
                                  var195 = [0.18518518518518517, 0.0, 0.8148148148148148];
                              }
                          }
                      } else {
                          if (input[1] <= 45.5) {
                              if (input[5] <= 67.12955665588379) {
                                  var195 = [0.0, 0.8571428571428571, 0.14285714285714285];
                              } else {
                                  var195 = [0.09090909090909091, 0.0, 0.9090909090909091];
                              }
                          } else {
                              if (input[5] <= 59.8647575378418) {
                                  var195 = [0.0, 1.0, 0.0];
                              } else {
                                  var195 = [0.8, 0.0, 0.2];
                              }
                          }
                      }
                  } else {
                      if (input[4] <= 84.5706901550293) {
                          var195 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[2] <= 5.73333740234375) {
                              if (input[2] <= 3.8641246557235718) {
                                  var195 = [0.0, 0.0, 1.0];
                              } else {
                                  var195 = [0.3333333333333333, 0.0, 0.6666666666666666];
                              }
                          } else {
                              var195 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  if (input[0] <= 16.050000190734863) {
                      if (input[5] <= 166.70000457763672) {
                          if (input[5] <= 135.2728729248047) {
                              var195 = [1.0, 0.0, 0.0];
                          } else {
                              if (input[4] <= 90.71674346923828) {
                                  var195 = [0.0, 0.0, 1.0];
                              } else {
                                  var195 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          var195 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[5] <= 243.29999542236328) {
                          if (input[4] <= 90.8499984741211) {
                              var195 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[5] <= 135.74197387695312) {
                                  var195 = [0.8, 0.0, 0.2];
                              } else {
                                  var195 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          var195 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          } else {
              var195 = [1.0, 0.0, 0.0];
          }
      }
  }
  var5 = addVec(var6, var195);
  let var196: HazardVector = [0, 0, 0];
  if (input[5] <= 72.0999984741211) {
      if (input[1] <= 62.5) {
          if (input[2] <= 4.059570550918579) {
              if (input[1] <= 34.0) {
                  if (input[0] <= 13.660210132598877) {
                      if (input[2] <= 3.5474252700805664) {
                          var196 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[0] <= 11.950000286102295) {
                              var196 = [0.0, 0.0, 1.0];
                          } else {
                              var196 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[1] <= 28.5) {
                          var196 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 31.663679122924805) {
                              var196 = [1.0, 0.0, 0.0];
                          } else {
                              var196 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  if (input[5] <= 8.787233829498291) {
                      var196 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[5] <= 53.4999942779541) {
                          if (input[4] <= 84.69938659667969) {
                              var196 = [0.0, 1.0, 0.0];
                          } else {
                              if (input[5] <= 32.749999046325684) {
                                  var196 = [0.0, 0.0, 1.0];
                              } else {
                                  var196 = [0.16666666666666666, 0.0, 0.8333333333333334];
                              }
                          }
                      } else {
                          var196 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[5] <= 25.67666721343994) {
                  if (input[4] <= 85.7462158203125) {
                      if (input[5] <= 5.619839429855347) {
                          if (input[1] <= 41.0) {
                              var196 = [0.0, 1.0, 0.0];
                          } else {
                              var196 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var196 = [0.0, 1.0, 0.0];
                      }
                  } else {
                      if (input[0] <= 8.652379989624023) {
                          var196 = [0.0, 0.0, 1.0];
                      } else {
                          var196 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[4] <= 89.87937545776367) {
                      if (input[4] <= 83.44764709472656) {
                          var196 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[1] <= 59.5) {
                              var196 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[0] <= 5.395391464233398) {
                                  var196 = [0.0, 0.25, 0.75];
                              } else {
                                  var196 = [0.0, 1.0, 0.0];
                              }
                          }
                      }
                  } else {
                      var196 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          if (input[1] <= 92.0) {
              if (input[4] <= 84.56925964355469) {
                  if (input[4] <= 81.88681030273438) {
                      var196 = [0.0, 1.0, 0.0];
                  } else {
                      if (input[1] <= 73.0) {
                          var196 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[4] <= 81.96207046508789) {
                              var196 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[0] <= 9.162754774093628) {
                                  var196 = [0.0, 1.0, 0.0];
                              } else {
                                  var196 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  }
              } else {
                  var196 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[0] <= 9.800000190734863) {
                  var196 = [1.0, 0.0, 0.0];
              } else {
                  var196 = [0.0, 0.0, 1.0];
              }
          }
      }
  } else {
      if (input[5] <= 243.29999542236328) {
          if (input[4] <= 91.95000076293945) {
              if (input[4] <= 91.09317016601562) {
                  if (input[4] <= 90.75689697265625) {
                      if (input[0] <= 21.317214012145996) {
                          if (input[4] <= 90.45000076293945) {
                              if (input[2] <= 4.401570439338684) {
                                  var196 = [0.1111111111111111, 0.0, 0.8888888888888888];
                              } else {
                                  var196 = [0.5714285714285714, 0.0, 0.42857142857142855];
                              }
                          } else {
                              var196 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var196 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[2] <= 6.833337306976318) {
                          if (input[0] <= 24.47485637664795) {
                              var196 = [0.0, 0.0, 1.0];
                          } else {
                              var196 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var196 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[4] <= 91.60384750366211) {
                      if (input[0] <= 11.200000286102295) {
                          var196 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 121.72269058227539) {
                              if (input[1] <= 45.0) {
                                  var196 = [0.15384615384615385, 0.0, 0.8461538461538461];
                              } else {
                                  var196 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[1] <= 40.0) {
                                  var196 = [1.0, 0.0, 0.0];
                              } else {
                                  var196 = [0.7142857142857143, 0.0, 0.2857142857142857];
                              }
                          }
                      }
                  } else {
                      if (input[1] <= 42.0) {
                          var196 = [1.0, 0.0, 0.0];
                      } else {
                          var196 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          } else {
              var196 = [1.0, 0.0, 0.0];
          }
      } else {
          if (input[4] <= 91.1299934387207) {
              if (input[5] <= 273.04998779296875) {
                  var196 = [0.0, 0.0, 1.0];
              } else {
                  var196 = [1.0, 0.0, 0.0];
              }
          } else {
              var196 = [0.0, 0.0, 1.0];
          }
      }
  }
  var4 = addVec(var5, var196);
  let var197: HazardVector = [0, 0, 0];
  if (input[4] <= 85.73360061645508) {
      if (input[0] <= 4.566897630691528) {
          var197 = [0.0, 0.0, 1.0];
      } else {
          if (input[1] <= 92.0) {
              if (input[1] <= 45.5) {
                  if (input[0] <= 23.7997465133667) {
                      if (input[5] <= 31.646625518798828) {
                          var197 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[5] <= 36.55547523498535) {
                              var197 = [0.0, 0.0, 1.0];
                          } else {
                              var197 = [0.0, 1.0, 0.0];
                          }
                      }
                  } else {
                      if (input[5] <= 66.2592601776123) {
                          var197 = [0.0, 1.0, 0.0];
                      } else {
                          var197 = [0.0, 0.0, 1.0];
                      }
                  }
              } else {
                  if (input[2] <= 6.705887317657471) {
                      if (input[5] <= 3.391668438911438) {
                          var197 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 22.319673538208008) {
                              if (input[5] <= 6.692272901535034) {
                                  var197 = [0.0, 1.0, 0.0];
                              } else {
                                  var197 = [0.02857142857142857, 0.9571428571428572, 0.014285714285714285];
                              }
                          } else {
                              if (input[4] <= 84.4706916809082) {
                                  var197 = [0.0, 1.0, 0.0];
                              } else {
                                  var197 = [0.0, 0.0, 1.0];
                              }
                          }
                      }
                  } else {
                      var197 = [0.0, 0.0, 1.0];
                  }
              }
          } else {
              var197 = [0.0, 0.0, 1.0];
          }
      }
  } else {
      if (input[2] <= 3.978654384613037) {
          if (input[0] <= 23.949999809265137) {
              if (input[5] <= 129.8000030517578) {
                  if (input[0] <= 21.417213439941406) {
                      if (input[0] <= 21.34999942779541) {
                          if (input[4] <= 92.0) {
                              if (input[0] <= 14.110209941864014) {
                                  var197 = [0.0, 0.0, 1.0];
                              } else {
                                  var197 = [0.08163265306122448, 0.0, 0.9183673469387755];
                              }
                          } else {
                              var197 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var197 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[4] <= 91.41435623168945) {
                          var197 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[2] <= 2.450000047683716) {
                              var197 = [0.0, 0.0, 1.0];
                          } else {
                              var197 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  if (input[5] <= 239.75) {
                      if (input[4] <= 90.96413040161133) {
                          var197 = [0.0, 0.0, 1.0];
                      } else {
                          var197 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[5] <= 279.8999938964844) {
                          if (input[0] <= 15.400000095367432) {
                              var197 = [1.0, 0.0, 0.0];
                          } else {
                              var197 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var197 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[5] <= 56.14999961853027) {
                  var197 = [0.0, 0.0, 1.0];
              } else {
                  var197 = [1.0, 0.0, 0.0];
              }
          }
      } else {
          if (input[1] <= 42.5) {
              if (input[4] <= 90.14999771118164) {
                  if (input[0] <= 12.349999904632568) {
                      if (input[5] <= 45.5) {
                          var197 = [0.0, 0.0, 1.0];
                      } else {
                          var197 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      var197 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var197 = [1.0, 0.0, 0.0];
              }
          } else {
              if (input[5] <= 129.8000030517578) {
                  if (input[5] <= 108.20000076293945) {
                      if (input[1] <= 47.5) {
                          if (input[4] <= 89.51884841918945) {
                              var197 = [0.0, 0.0, 1.0];
                          } else {
                              var197 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[4] <= 89.89022445678711) {
                              if (input[4] <= 89.0999984741211) {
                                  var197 = [0.5, 0.5, 0.0];
                              } else {
                                  var197 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var197 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      var197 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var197 = [1.0, 0.0, 0.0];
              }
          }
      }
  }
  var3 = addVec(var4, var197);
  let var198: HazardVector = [0, 0, 0];
  if (input[5] <= 72.20000076293945) {
      if (input[0] <= 7.454452276229858) {
          if (input[4] <= 84.37057495117188) {
              if (input[2] <= 7.150000095367432) {
                  var198 = [0.0, 1.0, 0.0];
              } else {
                  var198 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[2] <= 4.747676134109497) {
                  var198 = [0.0, 0.0, 1.0];
              } else {
                  if (input[4] <= 84.42977905273438) {
                      var198 = [0.0, 0.0, 1.0];
                  } else {
                      if (input[2] <= 7.892725706100464) {
                          if (input[1] <= 59.5) {
                              if (input[0] <= 5.987727165222168) {
                                  var198 = [0.0, 0.0, 1.0];
                              } else {
                                  var198 = [0.0, 1.0, 0.0];
                              }
                          } else {
                              var198 = [0.0, 1.0, 0.0];
                          }
                      } else {
                          var198 = [0.0, 1.0, 0.0];
                      }
                  }
              }
          }
      } else {
          if (input[5] <= 12.193005561828613) {
              if (input[2] <= 5.979469060897827) {
                  if (input[5] <= 5.554974794387817) {
                      if (input[2] <= 3.287307024002075) {
                          var198 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[4] <= 83.92876815795898) {
                              var198 = [0.0, 1.0, 0.0];
                          } else {
                              var198 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      if (input[5] <= 9.70737600326538) {
                          var198 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[4] <= 84.71034622192383) {
                              var198 = [0.0, 1.0, 0.0];
                          } else {
                              var198 = [0.0, 0.0, 1.0];
                          }
                      }
                  }
              } else {
                  var198 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[2] <= 2.235827326774597) {
                  if (input[0] <= 24.699999809265137) {
                      if (input[0] <= 15.389954090118408) {
                          var198 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[0] <= 16.699999809265137) {
                              var198 = [1.0, 0.0, 0.0];
                          } else {
                              var198 = [0.0, 0.0, 1.0];
                          }
                      }
                  } else {
                      var198 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[0] <= 20.28386878967285) {
                      if (input[4] <= 84.7780532836914) {
                          var198 = [0.0, 1.0, 0.0];
                      } else {
                          if (input[1] <= 36.0) {
                              if (input[5] <= 37.75) {
                                  var198 = [0.6857142857142857, 0.0, 0.3142857142857143];
                              } else {
                                  var198 = [0.125, 0.0, 0.875];
                              }
                          } else {
                              if (input[5] <= 40.28466987609863) {
                                  var198 = [0.07407407407407407, 0.07407407407407407, 0.8518518518518519];
                              } else {
                                  var198 = [0.3888888888888889, 0.0, 0.6111111111111112];
                              }
                          }
                      }
                  } else {
                      if (input[5] <= 52.58213806152344) {
                          if (input[4] <= 91.95000076293945) {
                              var198 = [0.0, 0.0, 1.0];
                          } else {
                              var198 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          if (input[4] <= 88.03680801391602) {
                              var198 = [0.0, 1.0, 0.0];
                          } else {
                              var198 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          }
      }
  } else {
      if (input[5] <= 129.8000030517578) {
          if (input[2] <= 4.476953744888306) {
              if (input[0] <= 23.949999809265137) {
                  if (input[4] <= 92.0) {
                      if (input[0] <= 14.25) {
                          if (input[5] <= 102.6500015258789) {
                              var198 = [1.0, 0.0, 0.0];
                          } else {
                              var198 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          if (input[4] <= 91.09317016601562) {
                              var198 = [0.0, 0.0, 1.0];
                          } else {
                              if (input[0] <= 20.899999618530273) {
                                  var198 = [0.02702702702702703, 0.0, 0.972972972972973];
                              } else {
                                  var198 = [0.6666666666666666, 0.0, 0.3333333333333333];
                              }
                          }
                      }
                  } else {
                      var198 = [1.0, 0.0, 0.0];
                  }
              } else {
                  if (input[4] <= 88.0) {
                      var198 = [0.0, 0.0, 1.0];
                  } else {
                      var198 = [1.0, 0.0, 0.0];
                  }
              }
          } else {
              if (input[4] <= 91.04999923706055) {
                  if (input[5] <= 100.4000015258789) {
                      if (input[2] <= 4.700000047683716) {
                          var198 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[5] <= 87.95000076293945) {
                              var198 = [0.0, 0.0, 1.0];
                          } else {
                              var198 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      var198 = [0.0, 0.0, 1.0];
                  }
              } else {
                  if (input[5] <= 108.35000228881836) {
                      var198 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[1] <= 46.5) {
                          var198 = [1.0, 0.0, 0.0];
                      } else {
                          var198 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          }
      } else {
          if (input[5] <= 243.29999542236328) {
              if (input[2] <= 3.799999952316284) {
                  if (input[0] <= 15.911245822906494) {
                      if (input[0] <= 11.599999904632568) {
                          var198 = [1.0, 0.0, 0.0];
                      } else {
                          var198 = [0.0, 0.0, 1.0];
                      }
                  } else {
                      if (input[2] <= 2.4962528944015503) {
                          if (input[5] <= 131.84197235107422) {
                              var198 = [0.0, 0.0, 1.0];
                          } else {
                              var198 = [1.0, 0.0, 0.0];
                          }
                      } else {
                          var198 = [1.0, 0.0, 0.0];
                      }
                  }
              } else {
                  if (input[2] <= 5.116742849349976) {
                      var198 = [1.0, 0.0, 0.0];
                  } else {
                      if (input[4] <= 90.51674270629883) {
                          if (input[4] <= 89.41674423217773) {
                              var198 = [1.0, 0.0, 0.0];
                          } else {
                              var198 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var198 = [1.0, 0.0, 0.0];
                      }
                  }
              }
          } else {
              if (input[0] <= 15.400000095367432) {
                  var198 = [1.0, 0.0, 0.0];
              } else {
                  var198 = [0.0, 0.0, 1.0];
              }
          }
      }
  }
  var2 = addVec(var3, var198);
  let var199: HazardVector = [0, 0, 0];
  if (input[5] <= 25.67666721343994) {
      if (input[4] <= 85.7462158203125) {
          if (input[5] <= 3.493544101715088) {
              if (input[2] <= 7.316486358642578) {
                  if (input[4] <= 80.70000076293945) {
                      var199 = [0.0, 1.0, 0.0];
                  } else {
                      var199 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var199 = [0.0, 0.0, 1.0];
              }
          } else {
              if (input[1] <= 84.5) {
                  if (input[2] <= 8.783466339111328) {
                      if (input[4] <= 84.72245788574219) {
                          if (input[1] <= 78.5) {
                              if (input[5] <= 4.544931173324585) {
                                  var199 = [0.0, 0.9714285714285714, 0.02857142857142857];
                              } else {
                                  var199 = [0.0, 1.0, 0.0];
                              }
                          } else {
                              if (input[2] <= 4.462051153182983) {
                                  var199 = [1.0, 0.0, 0.0];
                              } else {
                                  var199 = [0.0, 1.0, 0.0];
                              }
                          }
                      } else {
                          if (input[4] <= 85.32582092285156) {
                              if (input[4] <= 84.92357635498047) {
                                  var199 = [0.0, 0.6, 0.4];
                              } else {
                                  var199 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              var199 = [0.0, 1.0, 0.0];
                          }
                      }
                  } else {
                      var199 = [0.0, 0.0, 1.0];
                  }
              } else {
                  var199 = [0.0, 0.0, 1.0];
              }
          }
      } else {
          if (input[2] <= 3.3499999046325684) {
              var199 = [0.0, 0.0, 1.0];
          } else {
              if (input[5] <= 10.062615871429443) {
                  var199 = [0.0, 0.0, 1.0];
              } else {
                  if (input[1] <= 51.5) {
                      if (input[2] <= 4.900000095367432) {
                          if (input[0] <= 15.650000095367432) {
                              var199 = [1.0, 0.0, 0.0];
                          } else {
                              var199 = [0.0, 0.0, 1.0];
                          }
                      } else {
                          var199 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[1] <= 53.5) {
                          var199 = [0.0, 1.0, 0.0];
                      } else {
                          var199 = [0.0, 0.0, 1.0];
                      }
                  }
              }
          }
      }
  } else {
      if (input[4] <= 91.95000076293945) {
          if (input[5] <= 72.20000076293945) {
              if (input[4] <= 83.84362411499023) {
                  var199 = [0.0, 1.0, 0.0];
              } else {
                  if (input[5] <= 48.228492736816406) {
                      if (input[4] <= 91.54999923706055) {
                          if (input[1] <= 59.5) {
                              if (input[4] <= 90.70000076293945) {
                                  var199 = [0.0, 0.0, 1.0];
                              } else {
                                  var199 = [0.25, 0.0, 0.75];
                              }
                          } else {
                              if (input[5] <= 27.09999942779541) {
                                  var199 = [0.0, 1.0, 0.0];
                              } else {
                                  var199 = [0.3333333333333333, 0.0, 0.6666666666666666];
                              }
                          }
                      } else {
                          var199 = [1.0, 0.0, 0.0];
                      }
                  } else {
                      if (input[4] <= 88.70000076293945) {
                          var199 = [0.0, 0.0, 1.0];
                      } else {
                          if (input[4] <= 90.29999923706055) {
                              if (input[5] <= 51.25) {
                                  var199 = [0.0, 0.0, 1.0];
                              } else {
                                  var199 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              var199 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              }
          } else {
              if (input[0] <= 24.2997465133667) {
                  if (input[0] <= 14.79036808013916) {
                      if (input[5] <= 144.94651794433594) {
                          if (input[0] <= 14.088986873626709) {
                              if (input[1] <= 86.5) {
                                  var199 = [0.058823529411764705, 0.0, 0.9411764705882353];
                              } else {
                                  var199 = [1.0, 0.0, 0.0];
                              }
                          } else {
                              if (input[2] <= 5.282783508300781) {
                                  var199 = [0.625, 0.0, 0.375];
                              } else {
                                  var199 = [1.0, 0.0, 0.0];
                              }
                          }
                      } else {
                          if (input[4] <= 88.55000305175781) {
                              var199 = [0.0, 0.0, 1.0];
                          } else {
                              var199 = [1.0, 0.0, 0.0];
                          }
                      }
                  } else {
                      if (input[0] <= 21.50369930267334) {
                          if (input[5] <= 98.25) {
                              if (input[1] <= 56.5) {
                                  var199 = [0.6842105263157895, 0.0, 0.3157894736842105];
                              } else {
                                  var199 = [0.0, 0.0, 1.0];
                              }
                          } else {
                              if (input[2] <= 5.214880466461182) {
                                  var199 = [0.04, 0.0, 0.96];
                              } else {
                                  var199 = [0.9166666666666666, 0.0, 0.08333333333333333];
                              }
                          }
                      } else {
                          if (input[4] <= 91.41435623168945) {
                              if (input[2] <= 3.935486674308777) {
                                  var199 = [0.0, 0.0, 1.0];
                              } else {
                                  var199 = [0.3333333333333333, 0.0, 0.6666666666666666];
                              }
                          } else {
                              var199 = [1.0, 0.0, 0.0];
                          }
                      }
                  }
              } else {
                  if (input[4] <= 89.95000076293945) {
                      var199 = [0.0, 0.0, 1.0];
                  } else {
                      var199 = [1.0, 0.0, 0.0];
                  }
              }
          }
      } else {
          var199 = [1.0, 0.0, 0.0];
      }
  }
  var1 = addVec(var2, var199);
  var0 = [var1[0] * 0.01, var1[1] * 0.01, var1[2] * 0.01];
  return var0;
}
